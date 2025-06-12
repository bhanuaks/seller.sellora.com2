import React, { useEffect, useState } from 'react';

const SearchBrandSection = ({brandList, searchTerm ,setSearchTerm}) => {
    const [showFilterList, setShowFilterList] = useState(false)
  

  const data = brandList; 
 
  const [searchTermData, setSearchTermData] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(()=>{
    if(searchTermData){
        setShowFilterList(true)
        setFilteredResults(matchData(searchTermData).slice(0, 10));
    }else{
        setFilteredResults([]);
        setShowFilterList(false) 
    } 
  },[searchTermData])

 
  
  const matchData = (input) => {
    const reg = new RegExp(input.split("").join("\\w*").replace(/\W/, ""), "i");
    return data.filter(person => person.match(reg));
  }

 

  const setSearch = (value) => {
    setSearchTerm(value);
    setShowFilterList(false)
    setFilteredResults([]);
    setSearchTermData('')
  }

  function hendleSearchInput(e){
    const {value} = e.target
    setSearchTerm(value);
    //  changeInput(value);
     setSearchTermData(value)
  }


  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.classList.contains("form-group") ) {
        setShowFilterList(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Cleanup function to remove event listener on unmount
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const activeSearchInput = (e) => {
    console.log('Search Term:', searchTerm, e.target.classList); 
    if (searchTerm.trim()) {
        setFilteredResults(matchData(searchTerm).slice(0, 10));
    } else {
        setFilteredResults(data);  
    }

    setTimeout(() => {
        
        setShowFilterList(true);
    }, 200);
};
  

  return (
    <>
      {/* <style>
        {`
          .MasterContainer {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            margin-top: 50px;
          }
          .title {
            margin-bottom: 22px;
          }
        `}
      </style> */}

      <div className="MasterContainer">
        <div>
          <div className="form">
            <div className="form-group" style={{position:'relative'}}>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e)=>hendleSearchInput(e)}
                className="form-control form-control-lg"
                placeholder="Search"
                onClick={(e)=>activeSearchInput(e)}
                autoComplete='off'
              />
             

              {showFilterList ? (
                  <>
              <div id="result" className='autocomplete-result' style={{ overflowY: filteredResults.length > 5 ? "scroll" : "hidden" }}>
                       
                       {searchTerm && (
                        <a 
                            className="list-group-item list-group-item-action"
                            href="#"
                            onClick={() => setSearch(searchTerm)}
                        >
                           <strong>{searchTerm} </strong> 
                        </a>
                       )} 

                        {filteredResults.map((result, index) => (
                        <a
                            key={index}
                            className="list-group-item list-group-item-action"
                            href="#"
                            onClick={() => setSearch(result)}
                        >
                            {result}
                        </a>
                        ))}
              </div>
                        </>
                    ):''}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBrandSection;
