const { Schema, default: mongoose } = require("mongoose");


const searchKeywordSchema = new Schema({
    keywordName:{
        type:String,
        require:[true, "Keyword name is required"] 
    }, 
    priority:{
        type:Number,
        default:0
    }
}, {timestamps:true})


export const searchKeywordModal = mongoose.models.SearchKeyword || mongoose.model("SearchKeyword", searchKeywordSchema)