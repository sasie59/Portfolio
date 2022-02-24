import React, { Component } from 'react';
import "./App.scss";
import jpy from './jpy.png';

const TWD2JPY = 0.2468;
const JPY2TWD = 0.2422;

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      target: ''
    }
  }

  handleSelect = ({ target }) => {
    console.log(target.value);
    this.setState({
      target: target.value === 'buy' ? TWD2JPY : JPY2TWD
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDafault();
    this.setState({
      value: ''
    })
  }
  render() {
    const { value, target } = this.state;
    return (
      <div className='layout'>
        <img className='img' src={jpy} alt="" />
        <div className='source'>牌告匯率 - 臺灣銀行</div>
        <select className='img' id="" onChange={this.handleSelect}>
          <option value='choice'>請選譯</option>
          <option value='buy'>買日幣</option>
          <option value='sell'>賣日幣</option>
        </select><br />
        <div className='illustrate'>請輸入要兌換的金額</div>
        <div className='textStyle'>
          <form action="" onSubmit={this.handleSubmit}>
            <input
              className='input'
              type="text"
              value={value}
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div className='outPut'>
          <p className='cent'>NT$ </p>
          <span className='exhibit'>{~~(value * target)}
          </span>
        </div>
      </div>
    )
  }
}
