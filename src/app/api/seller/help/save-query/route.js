import { uploadFileFun } from "@/app/api/uploadImage/route";
import { connectDb } from "@/Http/dbConnect2";
import { isEmpty, rand, responseFun } from "@/Http/helper";
import { sellerTicketCountModal, sellerTicketModal } from "@/Http/Models/Help/SellerTicket";
import path from 'path'

export async function POST(request) {
    
    await connectDb();
    const formData = await request.formData();
        
    const issueCategories = formData.get("issueCategories");
    const subject = formData.get("subject");
    const description = formData.get("description");
    const screenshot = formData.get("screenshot");
    const contactMethod = formData.get("contactMethod");
    const mobile = formData.get("mobile");
    const country_s_name = formData.get("country_s_name");
    const mobile_code = formData.get("mobile_code");
    const country = formData.get("country");
    const ext = formData.get("ext");
    const email = formData.get("email");

    try {

        const errors = {};

        if(!screenshot)errors.screenshot = `File or screenshot is required.`;

        if(isEmpty(issueCategories))errors.issueCategories = `Issue Categories is required.`;
        if(isEmpty(subject))errors.subject = `Subject is required.`;
        if(isEmpty(description))errors.description = `Description is required.`;
        if(contactMethod !== "email"){ 
            if(!mobile)errors.mobile = `Number is required.`;
            if(isEmpty(ext))errors.ext = `Required.`;
            if(isEmpty(country))errors.country = `Country is required.`;
        }else{
             if(isEmpty(email))errors.email = `Email is required.`;
        } 

        if(Object.keys(errors).length > 0){
            return responseFun(false, {errors, status_code:402}, 200)
        }

        let fileNewPath = "";
        if(screenshot &&  screenshot instanceof File){
             const extension = path.extname(screenshot.name).replace(".", "");
            const filename = `${rand(1111,9999)}-${Date.now()}.${extension}`;
               const uploadingPath = "uploads/tickets"
                await uploadFileFun(screenshot, `public/${uploadingPath}`, filename);
                fileNewPath = `${uploadingPath}/${filename}`;
        }

        const ticketNumber = await createTicketId();
            if(!ticketNumber){
                 return responseFun(false, {message: "Ticket not create"}, 400)
            }
          const ticketId = `SN${String(ticketNumber).padStart(5, "0")}`;
        const insertData = {
            ticketId,
            issueCategories,
            subject,
            description,
            screenshot:fileNewPath,
            contactMethod,
            mobile:mobile || undefined,
            country_s_name:country_s_name || "us",
            mobile_code:mobile_code || "1",
            country,
            ext,
            email:email || undefined,
            status:"Pending"
        
        }

        const saveData =  await sellerTicketModal.create(insertData)
        return responseFun(true, {message: "Thank you"}, 200)
    } catch (error) {
        console.log(error);
        return responseFun(false, {message: error.message}, 500)
    }
}




export async function GET(request) {
    
    await connectDb()
   const { searchParams } = new URL(request.url);

    const status = searchParams.get("status") || "";
    const sortBy = searchParams.get("sortBy") || "";
    const filterBy = searchParams.get("filterBy") || "";
    const searchText = searchParams.get("searchText") || "";
 
    try{
        const query = {};
        let sortQuery = {createdAt:-1};
        if(sortBy == "Updated"){
             sortQuery = {updatedAt:-1};
        }

        if(searchText){
             query.ticketId = { $regex: searchText, $options: "i" };
        }

        if(filterBy){
             query.issueCategories = filterBy;
        }
        if(status == "NeedsAttention"){
              query.status = "Pending";
        }else if(status == "InProgress"){
              query.status = "In Progress";
        }else if(status == "Closed"){
              query.status = "Closed";
        }

        const list = await sellerTicketModal.find(query).sort(sortQuery)
         return responseFun(true, {list}, 200)
    }catch(error){
        console.log(error);
        return responseFun(false, {message:error.message}, 500)
    }
}



async function createTicketId(){

    try{
      const updatedTicket = await sellerTicketCountModal.findOneAndUpdate(
            { name: "ticket" },
            { $inc: { counter: 1 } },
            { new: true, upsert: true }
            );
    return updatedTicket.counter;
    }catch(error){
        console.log(error);
        return null
    }
}