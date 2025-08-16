const { Schema, default: mongoose } = require("mongoose");

const announcementSchema = new Schema({
    announcement:{
        type:String,
        required:true
    },
    short_description:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
}, {timestamps:true})


export const  announcementModal = mongoose.models.Announcement || mongoose.model("Announcement", announcementSchema);