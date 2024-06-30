import React, { useContext } from 'react';
import './Cart.css'
import { StoreContext } from '../../context/store-context';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItem, food_list, removeFromCart, totalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
              <div key={item._id} className="cart-item-title cart-item-items">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>₹{item.price * cartItem[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr/>
              </>
            );
          }
          return null;
        })}
        <div className='cart-bottom'>
          <div className="cart-total">
            <h2>Cart total</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delevery fee</p>
              <p>₹{50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{totalCartAmount()}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className='cart-checkout-button'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>
            If you have a promocode enter it here.
            <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>APPLY</button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;