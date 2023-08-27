import Loading from "../1488.gif";
import React from "react";

export default function Spinner() {
  return (
    <div className="text-center">
      <img className="my-3" src={Loading} alt="" />
    </div>
  );
}
