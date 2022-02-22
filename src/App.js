import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import exchangeRateJpy from './exchangeRateJpy';
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/exchangeRateJpy' elemet={<exchangeRateJpy />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
