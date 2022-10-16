import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    personal: String,
    prefer: String,
    pwd: String,
    phone: String,
    token: String,
    isAuth: Boolean,
    og: {
        title: String,
        description: String,
        image: String
    }
})

export const User = mongoose.model("user", UserSchema)