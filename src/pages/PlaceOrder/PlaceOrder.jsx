import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/store-context'; // Adjust the path based on your project structure

const PlaceOrder = () => {
  const { cartItem, food_list } = useContext(StoreContext); // Assuming you have a context to manage cart items

  // Calculate subtotal, tax, and total based on cart items
  const calculateOrderSummary = () => {
    let subtotal = 0;
    for (let itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        let item = food_list.find((product) => product._id === itemId);
        subtotal += item.price * cartItem[itemId];
      }
    }
    const taxRate = 0.15; // Example tax rate (15%)
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateOrderSummary();

  return (
    <div className="place-order-container">
      <h2>Place Your Order</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <br />
        <label>Phone Number:</label>
        <input type="tel" placeholder="Enter your phone number" />
        <br />
        <label>Address:</label>
        <textarea placeholder="Enter your address" />
        <br />
        <label>Order Summary:</label>
        <ul>
          {Object.entries(cartItem).map(([itemId, quantity]) => {
            if (quantity > 0) {
              let item = food_list.find((product) => product._id === itemId);
              return (
                <li key={itemId}>
                  {item.name}: ₹{item.price.toFixed(2)} x {quantity}
                </li>
              );
            }
            return null;
          })}
          <li>Subtotal: ₹{subtotal.toFixed(2)}</li>
          <li>Tax: ₹{tax.toFixed(2)}</li>
          <li>Total: ₹{total.toFixed(2)}</li>
        </ul>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PlaceOrder;