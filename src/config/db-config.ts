import mongoose from "mongoose"

export const dbConnect = async() => {
    try {
        await mongoose.connect(Bun.env.MONGODB_URI!)
        console.log("db connected")
    } catch (error) {
         console.log("db connection failed")
         process.exit(1)
    }
}
