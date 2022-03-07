import React, { useState } from 'react';
import stock from './stock.jpg';
import "./App.scss";

const twStock = 34.22;
const cashDividend = 1.80;
const fundSize = 1.2 * 100000000000;
const totalUnit = 3496534 * 1000;
const etfS = (fundSize / totalUnit).toFixed(2); //ETF淨值
const discountPremium = (((twStock - etfS)).toFixed(2) / twStock * 100).toFixed(2);
const yearRateOfReturn = 10.20;
const dividendYield = ((cashDividend / twStock) * 100).toFixed(2);
const objArr = [
  { inform: '現金股利', result: `${cashDividend} 元` },
  { inform: '基金規模', result: `${fundSize} 元` },
  { inform: '總單位數', result: `${totalUnit} 股` },
  { inform: '折溢價幅度', result: `${discountPremium} %` },
  { inform: '殖利率', result: `${dividendYield} %` },
  { inform: '年報酬率', result: `${yearRateOfReturn} %` },
];

export default function Index() {
  const [number, setNumber] = useState('');
  const [show, setShow] = useState(false);
  let today = new Date();

  const handleClick = (index) => {
    setNumber(index);
    setShow(!show)
  }
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
        {objArr.map((item, index) =>
          <button onClick={handleClick.bind(this, index)}>{item.inform}</button>
        )}
      </div>
      {show &&
        <div className='result'>
          {objArr[number].result}
        </div>
      }
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
