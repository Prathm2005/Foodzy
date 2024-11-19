import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + '/api/order/userorder',
        {},
        { headers: { token } }
      );
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching orders:', error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="myorders">
      <h2>My Orders</h2>
      <div className="container">
        {data.length === 0 ? (
          <p>No Orders Found..</p>
        ) : (
          data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon2} alt="Parcel Icon" />
              <p className='desc'>
                {order.items.map((item, index) => {
                   if (index === order.items.length - 1) {
                    return item.name + " X " + item.quantity;
                  } else {
                    return item.name + " X " + item.quantity + ",";
                  }
                })}
              </p>
              <p className='amount'>${order.amount}.00</p>
              <p className='items'>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Your Order</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
