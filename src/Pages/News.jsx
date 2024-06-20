import React, { useState } from "react"
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const News = (props) => {
    const arr = [1,2,3,4,5,6,7,8,9]
    const [userText, setUserText] = useState('');
    const userSearch = ()=>{
      console.log(userText);
      setUserText('');
    }
  return (
    <div className="col-md-12 p-3 news-section">
        <div className="col-md-5 inputcontainer m-auto mt-4 ">
          <input type="email" placeholder="Enter cryptocurrency name eg: bitcoin" className="email-input" value={userText} onChange={(e)=>setUserText(e.target.value)}/>
          <button className="btn subscribe-btn" onClick={userSearch}>Search</button>
        </div>
        <div className="row mt-5">
          <div className="col-md-9 news-card-container p-3">
              {
                arr.map((ar)=>{
                  return(
                    <Link className="mb-3">
                      {/* <div key={ar} className="card maincard mx-3 mb-3 rounded shadow-md">
                            <img src="https://images.pexels.com/photos/5980887/pexels-photo-5980887.jpeg" alt="" className="img-fluid"/>
                            <div className="card-body p-2">
                              <p className="newssource">Source</p><br />
                              <p className="newscontent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellendus maiores tempora possimus....</p>
                            </div>
                      </div> */}
                       <Card sx={{ maxWidth: 220 }}>
                        <CardActionArea className="maincard">
                          <CardMedia
                            component="img"
                            height="110"
                            image="https://images.pexels.com/photos/5980887/pexels-photo-5980887.jpeg"
                            alt="green iguana"
                          />
                          <CardContent className="p-2">
                            <p className="newssource">Source</p><br />
                            <p className="newscontent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellendus maiores tempora possimus....</p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  )
                })
              }

          </div>
          <div className="col-md-3 p-0 pt-3 topnews-sec">
                <div className="card m-auto">
                  <div className="card-header text-light bg-primary">Top News</div>
                  <ul class="list-group border-0">
                    {
                      arr.map((ar)=>{
                        return(
                          <Link>
                            <li class="list-group-item border-0 border-bottom">An item Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum.</li>
                          </Link>
                        )
                      })
                    }
                  </ul>
                </div>
          </div>
        </div>
    </div>
  )
};

export default News;
