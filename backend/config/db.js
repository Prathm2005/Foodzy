import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose
    .connect('mongodb+srv://Prathm_Mal:Prathm212005@cluster0.4a3ot.mongodb.net/foodzy')
    .then(()=>console.log("DB Connected"))
}