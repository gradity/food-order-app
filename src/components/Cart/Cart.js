import React from 'react';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = [
    { id: 'c1', name: 'Salmon Skin Roll', amount: 2, price: '12.99' },
  ].map((item) => {
    return <li>{item.name}</li>;
  });
  return (
    <>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classses.total}>
        <span>Total Amount</span>
        <span>25.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </>
  );
};

export default Cart;
