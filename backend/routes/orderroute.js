import express from"express"
import authMiddleware from "../middlewares/auth.js"
import { listOrders, placeorder, updateStatus, userOrder, verifyOrder } from "../controllers/ordercontroller.js"

const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,placeorder)
orderRouter.post("/verify" ,verifyOrder)
orderRouter.post("/userorder" ,authMiddleware,userOrder)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)
export default orderRouter;