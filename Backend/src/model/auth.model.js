import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email id already exists"],
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please enter a valide email"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
})

const User = mongoose.model("User", userSchema)

export default User