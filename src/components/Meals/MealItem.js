import React from 'react';

import Card from '../Layout/Card';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  return (
    <Card className={classes.meal}>
      <h3>{props.title}</h3>
      <div className={classes.description}>{props.description}</div>
      <span className={classes.price}>{props.price}</span>
    </Card>
  );
};

export default MealItem;
