import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    
    <h1 style={{textAlign:'center'}}>This is Home Page </h1>
    
    <Link to="/about" style={{display:'flex', justifyContent:'flex-end',marginRight:'20px', color:'blue',textDecoration:'none'}}>About page</Link>
    </>
  )
}

export default Home;