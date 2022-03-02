import React, { useState } from 'react';
import stock from './stock.jpg';
import "./App.scss";

export default function Index() {
  const [twStock, setTwStock] = useState(33.33);
  let today = new Date();
  return (
    <div className='layout'>
      <header>
        <div className='first'>
          <div>元大高股息</div>
          <div className='price'>{twStock}</div>
        </div>
        <div className='last'>
          <div>0056</div>
          <div className='name'>元大台灣高股息證券投資信託基金</div>
        </div>
      </header>
      <div className='nav'>
        <button>現金股利</button>
        <button>
          累計發放股利</button>
        <span>(近10年)</span>
        <button>基金規模</button>
        <button>折溢價幅度</button>
        <button>殖利率</button>
        <button>年報酬率</button>
      </div>
      <div className='result'>result</div>
      <img className='img' src={stock} alt="" />
      <footer>
        更新 :
        {today.getFullYear()}年 /
        {today.getMonth() + 1}月 /
        {today.getDate()}日 &nbsp;
        {today.getHours()}時 :
        {today.getMinutes()}分
      </footer>
    </div>
  )
}
