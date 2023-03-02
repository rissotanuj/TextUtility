import React from "react";
import { useState } from "react";


export default function Textarea(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text has been changed to upper case","Success");

  };

  const handleLowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text has been changed to lower case","Success");

  };

  const clearText = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text has been cleared","Success");
  };

  const [text, setText] = useState("");

  return (
    <div style={{ marginLeft: "200px" }}>
      <h2 style={{ marginLeft: "240px",padding :"40px" }}>
        Enter your text here to manipulate
      </h2>
      <div className="form-floating">
        <textarea
          className={`form-control bg-${props.mode==="dark"?"grey":"light"} `}
          value={text}
          onChange={handleOnChange}
          placeholder="Leave a comment here"
          id="textArea"
          style={{ width: "1000px", height: "300px",marginLeft:"30px" }}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-secondary mt-4 mx-4"
        onClick={handleUpperCase}
      >
        Upper-Case
      </button>
      <button
        type="button"
        className="btn btn-secondary mt-4 mx-4"
        onClick={handleLowerCase}
      >
        Lower-Case
      </button>
      <button
        type="button"
        className="btn btn-secondary mt-4 mx-4"
        onClick={clearText}
      >
        Clear-Text
      </button>
      <p className="mx-4 pt-4">Word Count :  {text.split(" ").length===1?0:text.split(" ").length}  <br></br>  Character Count : {text.length}</p>
    </div>
  );
}
