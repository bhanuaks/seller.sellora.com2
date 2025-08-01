import { useEffect, useRef, useState } from "react";

export default function ChatWithUserComponents({order_Item_id}) {


    const [chatList, setChatList] = useState([])
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
     const bottomRef = useRef(null); 

    function sendMessage(e){
          e.preventDefault();
          if(!message){
            return false
          }
          setSending(true)
        fetch(`/api/seller/product/orders/send-message-user`,{
            method:"POST",
            body:JSON.stringify({message, order_Item_id:order_Item_id })
        })
        .then((response)=>{
            setSending(false)
        if(!response.ok){
            throw new Error("Internal Issue");
        }
            return response.json();
        }).then((res)=>{  
        if(res.status){
           setMessage("")
           setChatList((prevData)=>([...prevData, res.data.newChat ]))
        }
        }).catch((error)=>{
        console.log(error);
        })
    }

    useEffect(()=>{

       fetch(`/api/seller/product/orders/send-message-user?order_Item_id=${order_Item_id}`)
        .then((response)=>{ 

            if(!response.ok){
                throw new Error("Internal Issue");
            }
            return response.json();

        }).then((res)=>{  
        if(res.status){ 
           setChatList(res.data.newChat)
        }
        }).catch((error)=>{
        console.log(error);
        })

    },[])

      useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);


  return (
    <div className="container-fluid bg-light p-1 rounded " style={{ height: '45vh' }}>
      <div className="row h-100">
        {/* Sidebar: Order/User List */} 
        {/* Chat Window */}
        <div className="col-lg-12 d-flex flex-column h-100">
          {/* Header */}
          {/* <div className="border-bottom py-3 px-4 bg-white fw-semibold">
            Chat with User <span className="text-primary"></span> 
          </div> */}

          {/* Chat messages */}
          <div className="flex-grow-1 p-3 overflow-auto bg-white">
            
            {chatList.length > 0 && chatList.map((chat, index) => (
                <div
                    key={index}
                    className={`d-flex mb-3 ${chat.sendBy === 'Seller' ? 'justify-content-end' : ''}`}
                >
                    <div
                    className={`p-2 rounded shadow-sm ${chat.sendBy === 'Seller' ? 'bg-primary text-white' : 'bg-light me-auto'}`}
                    >
                    <div
                        className={`small ${chat.sendBy === 'Seller' ? 'text-white-50 text-end' : 'text-muted'}`}
                    >
                        {/* {chat.sendBy} */}
                    </div>
                    <div>{chat.message} </div>
                    </div>
                </div>
                ))}

              <div ref={bottomRef}></div>

          
          </div>

          {/* Input area */}
          <div className="border-top p-3 bg-white">
            <form action={"#"} onSubmit={(e)=>sendMessage(e)}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={message || ""}
                onChange={(e)=>setMessage(e.target.value)}
              />
              <button className="btn btn-primary" onClick={(e)=>sendMessage(e)}
              disabled={sending}
                >{sending?"Sending":"Send"}</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
