import React, { useState } from 'react';
import stock from './stock.jpg'

export default function Index() {
  const [twStock, setTwStock] = useState(33.33);

  return (
    <div className='layout'>
      <header>
        <div>元大高股息</div>
        <div>{twStock}</div>
        <div>0056</div>
        <div>元大台灣高股息證券投資信託基金</div>
        <div>
          <nav>現金股利</nav>
          <nav>累計發放現金股利</nav>
          <nav>基金規模</nav>
          <nav>折溢價幅度</nav>
          <nav>殖利率</nav>
          <nav>年報酬率</nav>
        </div>
        <div>result</div>
        <img className='img' src={stock} alt="" />
      </header>
    </div>
  )
}
