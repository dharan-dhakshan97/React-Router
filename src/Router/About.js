import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const About = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((a) => a + 1);
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}> This is About Page </h1>

      <h1>The Counter is : {count}</h1>
      <button
        onClick={() => {
          handleClick();
          handleClick();
        }}
        style={{
          backgroundColor: "blue",
          border: "0",
          borderRadius: "5px",
          width: "125px",
          padding: "15px",
          height: "50px",
          color: "white",
          marginLeft: "30px",
          fontSize: "20px",
        }}
      >
        Click Me!
      </button>
      <div>
        <Link
          to="/"
          style={{
            margin: "20px",
            marginRight: "50px",
            // position: "fixed",
            display: "flex",
            justifyContent: "flex-end",
            // flexWrap:'flex-wrap',
            // alignItems:'flex-end',
            // alignContent: "flex-end",
            textDecoration:'none'
          }}
        >
          Next page
        </Link>{" "}
      </div>
    </>
  );
};

export default About;
