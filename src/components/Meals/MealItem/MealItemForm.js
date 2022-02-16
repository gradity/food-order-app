import React from 'react';

import classes from './MealItemForm.module.css';

import Input from '../../Layout/Input';

const MealItemForm = () => {
  return (
    <form onFormSubmit={(e) => e.preventDefault()} className={classes.form}>
      <Input />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
