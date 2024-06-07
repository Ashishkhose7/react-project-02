import React from "react"
import { Link } from "react-router-dom";
    
    const About = () => {
      return (
        <div className="my-5">
            <p>This is About Page</p>
            <Link to="/">Home</Link>
        </div>
      )
    };
    
    export default About;
    