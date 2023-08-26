import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase(text);
    setText(newText);
    props.showAlert("Converted to UppserCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase(text);
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("All Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: `${props.mode === "dark" ? "black" : "white"}`,
              color: `${props.mode === "dark" ? "white" : "black"}`,
            }}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="container">
          <button
            disabled={text.length === 0}
            onClick={handleUpClick}
            className="btn btn-primary mx-1 my-1"
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleLoClick}
            className="btn btn-primary mx-1 my-1"
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleClearText}
            className="btn btn-primary mx-1 my-1"
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleCopy}
            className="btn btn-primary mx-1 my-1"
          >
            Copy
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words, {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here!"}</p>
      </div>
    </>
  );
}
