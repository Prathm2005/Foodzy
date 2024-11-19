import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import userRouter from "./routes/userroutes.js";
import cartRouter from "./routes/cartroute.js";
import 'dotenv/config'
import orderRouter from "./routes/orderroute.js";


// app config
const app = express();
const port = process.env.PORT||4000;

// database connection
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// api foodRouter
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter)

// test route
app.get("/", (req, res) => {
    res.send("API Working");
});

// start server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
