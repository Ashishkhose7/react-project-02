import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Skeleton } from 'antd';

const News = (props) => {
    const [userText, setUserText] = useState('');
    const [news, setNews] = useState([]);
    const [topn, setTopn] = useState([]);
    
    useEffect(() => {
      getCryptoNews();
    }, [])
    
    const getCryptoNews = async (uservalue='bitcoin')=>{
        
      setNews([]);
      setTopn([]);
      const url = `https://crypto-news34.p.rapidapi.com/${uservalue}`;
        const options = {
        	method: 'GET',
        	headers: {
        		'x-rapidapi-key': '53cafe9a16msh9e42f46b009f80ap11be03jsnec1d5f1aa24b',
        		'x-rapidapi-host': 'crypto-news34.p.rapidapi.com'
        	}
        };

        try {
          console.log("fetching")
        	const response = await fetch(url, options);
        	const result = await response.json();
          const breakpoint = Math.floor((result.length)/2);
          const data1 = result.slice(0,breakpoint);
          const data2 = result.slice(breakpoint);
          setNews(data1);
          setTopn(data2);
          } catch (error) {
        	console.error(error);
        }
      setUserText('');
    }
  return (
    <div className="col-md-12 p-3 news-section">
        <div className="col-md-5 inputcontainer m-auto mt-4 ">
          <input type="email" placeholder="Enter cryptocurrency name eg: bitcoin" className="email-input" value={userText} onChange={(e)=>setUserText(e.target.value)}/>
          <button className="btn subscribe-btn" onClick={()=>getCryptoNews(userText)}>Search</button>
        </div>
        <div className="row mt-5">
          <div className="col-md-9 news-card-container p-3">
              {
               news[5] ?  news.map((newss, index)=>{
                if(index>15){
                  return
                }else{
                  return(
                    <a key={index} href={newss.url} target="_blank" rel="noreferrer" className="mb-3">
                       <Card sx={{ width: 220, maxWidth:220 }} className="maincard">
                        <CardActionArea >
                          <img src="https://images.pexels.com/photos/5980887/pexels-photo-5980887.jpeg" alt="" className="img-fluid" height="110"/>
                          <div className="p-2">
                            <p className="newssource text-primary">{newss.source}</p><br />
                            <p className="newscontent">{newss.title.length > 60 ? `${newss.title.substring(0, 60)}...` : newss.title}</p>
                          </div>
                        </CardActionArea>
                      </Card>
                    </a>
                  )
                }
                }) : <Skeleton active  className="mx-3"/>
              }

          </div>
          <div className="col-md-3 p-0 pt-3 topnews-sec">
                {
                  topn[5] ? <div className="card m-auto">
                  <div className="card-header text-light bg-primary">Top News</div>
                  <ul class="list-group border-0">
                    {
                     topn[5] ? topn.map((top, index)=>{
                      if(index>20){
                        return
                      }else{
                        return(
                          <a href={top.url} target="_blank" rel="noreferrer">
                            <li class="list-group-item border-0 border-bottom">{top.title}</li>
                          </a>
                        )
                      }
                      }) : ''
                    }
                  </ul>
                </div> : <Skeleton active  className="mx-3"/>
                
                }
          </div>
        </div>
    </div>
  )
};

export default News;
