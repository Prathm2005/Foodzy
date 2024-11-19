import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems = {}, food_list = [], removeFromCart, getTotal,url } = useContext(StoreContext);
  const navigate = useNavigate();
  const deliveryCharge = 3;
  const subtotal = getTotal();
  const total = subtotal + deliveryCharge;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove </p>
        </div>
        <br />
        <hr />
        {food_list.length > 0 && Object.keys(cartItems).some(id => cartItems[id] > 0) ? (
          food_list.map((item) => {
            const { _id, image, name, price } = item;
            const quantity = cartItems[_id] || 0;

            if (quantity > 0) {
              return (
                <div key={_id} className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+image} alt={name} />
                  <p>{name}</p>
                  <p>${price.toFixed(2)}</p>
                  <p>{quantity}</p>
                  <p>${(price * quantity).toFixed(2)}</p>
                  <p onClick={() => removeFromCart(_id)} className='cross'>X</p>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>Your cart is empty.</p>
        )}
        <hr />
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Charges</p>
              <p>${deliveryCharge.toFixed(2)}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
            <button onClick={() => navigate('/order')}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
