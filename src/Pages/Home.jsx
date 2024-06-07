import React from "react"
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="my-5">
       <p className="p-0 m-0">This is Home</p>
       <Link to='about'>About</Link>
    </div>
  )
};

export default Home;
