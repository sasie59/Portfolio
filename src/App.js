import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ExchangeRateJpy from './ExchangeRateJpy';
import TwStock_0056 from './0056'
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ExchangeRateJpy' element={<ExchangeRateJpy />}></Route>
        <Route path='/0056' element={<TwStock_0056 />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
