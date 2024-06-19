import React from "react"

const News = (props) => {
  return (
    <div className="col-md-12 p-3">
        <div class="col-md-5 inputcontainer m-auto mt-4">
          <input type="email" placeholder="Enter cryptocurrency name eg: bitcoin" class="email-input"/>
          <button class="btn subscribe-btn">Search</button>
      </div>
    </div>
  )
};

export default News;
