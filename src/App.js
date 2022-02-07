import React from 'react';
import './index.css';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}
