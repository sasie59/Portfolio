import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ExchangeRateJpy from './ExchangeRateJpy';
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ExchangeRateJpy' element={<ExchangeRateJpy />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
