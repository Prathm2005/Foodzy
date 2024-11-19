import React, { useContext, useEffect, useState } from 'react';
import './Placeorder.css';
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Placeorder = () => {
  const { getTotal, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    city: '',
    state: '',
    phone: '',
    address: '',
  });
  const navigate= useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotal===0){
      navigate('/cart')
    }
  },[token])

  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeorder = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const orderItems = food_list
        .filter((item) => cartItems[item._id] > 0)
        .map((item) => ({ ...item, quantity: cartItems[item._id] }));

      const orderData = {
        address: data,
        items: orderItems,
        amount: getTotal() + 3,
      };

      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });

      if (response.data && response.data.success) {
        window.location.replace(response.data.session_url);
      } else {
        alert('Error placing the order.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={placeorder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Info</p>
        <div className="multi-fields">
          <input
            required
            name="firstname"
            onChange={onChangeHandler}
            value={data.firstname}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastname"
            onChange={onChangeHandler}
            value={data.lastname}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email"
        />
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone Number"
        />
        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <input
          name="address"
          onChange={onChangeHandler}
          value={data.address}
          required
          type="text"
          placeholder="Address"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>$3</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotal() + 3}</b>
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Go For Payment'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
