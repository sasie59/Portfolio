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
        </ul>
      </div>
    )
  }
}
