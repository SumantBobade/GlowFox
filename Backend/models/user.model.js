import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: {
        type: String,
        required:[true, "Your username address is required"],
    },
    email: {
        type: String,
        required:[true, "Your email address is required"],
        unique:true
    },
    password: {
        type: String,
        required:[true, "Your password address is required"],
    },
    role: {
        type: String,
        enum: ["player", "creator", "admin"],
        default: "creator",
    },
    bio:{
        type: String,
        default:""  
    },
    profileURL: {
        type: String,
        default: "../public/profile/image.png"
    }
},
    {
    timestamps: true
    })

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
})

const User = model("user", userSchema);
export default User;