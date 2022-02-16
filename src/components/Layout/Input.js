import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor="qty">Qty</label>
      <input type="number" name="qty" />
    </div>
  );
};

export default Input;
