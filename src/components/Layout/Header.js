import React from 'react';

import classes from './Header.module.css';

import HeaderCartbutton from './HeaderCartButton';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>ReactEats!</h1>
        <HeaderCartbutton />
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="A table full of food"
        />
      </div>
    </div>
  );
};

export default Header;
