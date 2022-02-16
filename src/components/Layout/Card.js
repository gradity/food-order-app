import React from 'react';
import styled from 'styled-components';
// import classes from './Card.module.css';

const Card = styled.div`
padding: 1rem;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
border-radius: 14px;
background-color: white;
`;

// const Card = (props) => {
//   <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
// };

export default Card;
