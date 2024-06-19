import React from "react"
import { Link } from "react-router-dom";

const News = (props) => {
    const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="col-md-12 p-3 news-section">
        <div className="col-md-5 inputcontainer m-auto mt-4 ">
          <input type="email" placeholder="Enter cryptocurrency name eg: bitcoin" className="email-input"/>
          <button className="btn subscribe-btn">Search</button>
        </div>
        <div className="row mt-5">
          <div className="col-md-9 news-card-container p-3 ">
              {
                arr.map((ar)=>{
                  return(
                    <Link>
                      <div key={ar} className="card maincard m-3 rounded shadow-md">
                            <div className="card-body p-2">
                              <img src="https://images.pexels.com/photos/5980887/pexels-photo-5980887.jpeg" alt="" className="img-fluid d-block mx-auto mb-1" />
                              <p className="newssource">Source</p><br />
                              <p className="newscontent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellendus maiores tempora possimus....</p>
                            </div>
                      </div>
                    </Link>
                  )
                })
              }

          </div>
          <div className="col-md-3 p-3 "></div>
        </div>
    </div>
  )
};

export default News;
