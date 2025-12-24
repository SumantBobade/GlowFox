import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["player", "creator", "admin"],
        default: "creator",
    }
},
    {
    timestamps: true
    })

const User = model("user", userSchema);
export default User;