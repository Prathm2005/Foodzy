import React, { useState, useEffect } from "react";
import "./Orders.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(url + "/api/order/list");
            if (response.data.success) {
                setOrders(response.data.data);
                console.log(response.data.data);
            } else {
                toast.error("Error Occurred");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch orders");
        }
    };
    const statusHandler= async(event,orderId)=>{
        const response= await axios.post(url+"/api/order/status",{
            orderId,
            status:event.target.value
        })
        if(response.data.success){
            await fetchOrders();
        }
        
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="order add">
            <ToastContainer />
            <h3>Order Page</h3>
            <div className="order-list">
                {orders.length > 0 ? (
                    orders.map((order, index) => (
                        <div key={index} className="order-item">
                            <img src={assets.parcel_icon} alt="Parcel Icon" />
                            <div>
                                <p className="order-item-food">
                                    {order.items.map((item, idx) => (
                                        <span key={idx}>
                                            {item.name} x {item.quantity}
                                            {idx !== order.items.length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                                </p>
                                <p className="order-item-name">
                                    {order.address?.firstname} {order.address?.lastname}
                                </p>
                                <div className="order-item-address">
                                    {order.address?.city}, {order.address?.state}, {order.address?.address}
                                </div>
                                <p className="order-item-phone">{order.address?.phone}</p>
                            </div>
                            <p>Items: {order.items.length}</p>
                            <p>Total Amount: ${order.amount}</p>
                            <select className="Order Status" onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                                <option value="Food Processing">Food Processing</option>
                                <option value="Out For Delivery">Out For Delivery</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    ))
                ) : (
                    <p className="no-orders">No orders to display.</p>
                )}
            </div>
        </div>
    );
};

export default Orders;