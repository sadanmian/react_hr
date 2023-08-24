import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => { 
    let newText = text.toUpperCase(text);
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          className="form-control"
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button onClick={handleUpClick} className="btn btn-primary">
        Convert to Upper Case
      </button>
    </div>
  );
}
