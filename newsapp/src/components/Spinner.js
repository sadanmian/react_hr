import React, { Component } from "react";
import Loading from "../1488.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} alt="" />
      </div>
    );
  }
}
