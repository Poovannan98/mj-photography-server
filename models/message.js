const mongoose = require("mongoose");

const Messages = new mongoose.Schema(
    {
        Name : {
            type : String,
            required: true,
        },
        Email : {
            type : String,
            required: true,
        },
        Message : {
            type : String,
            required: true,
        },
        
    },{timestamps: true}
);

module.exports = mongoose.model("Messages", Messages);