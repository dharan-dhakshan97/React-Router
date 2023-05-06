import React from 'react'
import { Link } from "react-router-dom";
// import About  from "../Router/About";
const Home = () => {
  //  function getData(data) {
  //    console.log("get the Datas");
  //  }
  return (
    <>
   
    <h1 style={{textAlign:'center'}}>This is Home Page </h1>
    {/* <About handleClick={getData}/> */}
    
    <Link to="/about" style={{display:'flex', justifyContent:'flex-end',marginRight:'20px', color:'blue',textDecoration:'none'}}>About page</Link>
    </>
  )
}

export default Home;