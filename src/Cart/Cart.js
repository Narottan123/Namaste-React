import React from 'react';
import './Cart.css';

const Cart = (props) => {
  return (
    <div className='cart-image'>
     
      <img className='cart-logo' src={props.imageUrl} alt='cart image' />
      <h3>{props.resName}</h3>
      <h3>{props.cuisine}</h3>
      <h3>{props.rating} star</h3>
      <h3>{props.deliveryTime}</h3>
    </div>
  );
};

export default Cart;
