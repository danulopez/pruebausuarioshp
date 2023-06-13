import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    try {
    await mongoose.connect("mongodb+srv://daniela:roots@cluster0.sae7tqq.mongodb.net/pruebausuarios?retryWrites=true&w=majority")
    console.log(">>> DB is connected");
}   catch (error) {
    console.log(error);
}
}