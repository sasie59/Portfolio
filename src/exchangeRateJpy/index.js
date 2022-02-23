import React, { Component } from 'react';
import "./App.scss";
import jpy from './jpy.png'

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      jpyToTwd: 0.2712112
    }
  }
  render() {
    return (
      <div className='layout'>
        <img className='img' src={jpy} alt="" />
        <div className='source'>牌告匯率 - 臺灣銀行</div>
        <select className='img' name="" id="">
          <option value="">買日幣</option>
          <option value="">賣日幣</option>
        </select><br />
        <div className='illustrate'>請輸入要兌換的數字</div>
        <div className='textStyle'>
          <input className='input' type="text" />
        </div>
        <div className='outPut'>
          <p className='cent'>NT$ </p>
          <span className='exhibit'>{this.state.jpyToTwd}</span>
        </div>
      </div>
    )
  }
}
