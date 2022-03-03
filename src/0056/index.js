import React, { useState } from 'react';
import stock from './stock.jpg';
import "./App.scss";

const cashDividend = 1.80;
const fundSize = 1.2 * 100000000000;
const totalUnit = 3496534 * 1000;
const etfS = (fundSize / totalUnit).toFixed(2); //ETF淨值
const yearRateOfReturn = 10.20;

export default function Index() {
  const [twStock, setTwStock] = useState(34.22);
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
        <button>基金規模</button>
        <button>總單位數</button>
        <button>折溢價幅度</button>
        <button>殖利率</button>
        <button>年報酬率</button>
      </div>
      <div name='cashDividend' className='result'>{cashDividend}元</div>
      <div name='fundSize' className='result'>{fundSize}元</div>
      <div name='totalUnit' className='result'>{totalUnit} 股</div>
      <div name='etfS' className='result'>
        {(((twStock - etfS)).toFixed(2) / twStock * 100).toFixed(2)}%
      </div>
      <div name='yield' className='result'>{((cashDividend / twStock) * 100).toFixed(2)}%</div>
      <div name='yearRateOfReturn' className='result'>{yearRateOfReturn}%</div>
      <img className='img_Stock' src={stock} alt="" />
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
