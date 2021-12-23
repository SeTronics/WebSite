const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    User:{
        type : mongoose.Schema.Types.ObjectId,
        ref: User
    },
    addres:{
        type : String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})