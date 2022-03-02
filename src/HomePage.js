import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/ExchangeRateJpy">日幣即時匯率</Link><br />
          </li>
          <li>
            <Link to="/0056">0056-元大高股息基本面</Link><br />
          </li>
        </ul>
      </div>
    )
  }
}
