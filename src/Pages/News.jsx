import React, { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Skeleton } from 'antd';
import { imgdata, loadimg } from "../Reducers/globalstatReducers";
import { useDispatch, useSelector } from "react-redux";

const News = (props) => {

    const [userText, setUserText] = useState('');
    const [news, setNews] = useState([]);
    const [topn, setTopn] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const imgurls = useSelector(imgdata);
    const dispatch = useDispatch();

    useEffect(() => {
      getCryptoNews();
    }, [])
    
    const getCryptoNews = async (uservalue='bitcoin')=>{
        
      setNews([]);
      setTopn([]);
      setIsLoading(true);
      const url = `https://crypto-news34.p.rapidapi.com/${uservalue}`;
      const imgurl = 'https://api.pexels.com/v1/search?per_page=200&query=Stock Market';

        const options = {
        	method: 'GET',
        	headers: {
        		'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        		'x-rapidapi-host': 'crypto-news34.p.rapidapi.com'
        	}
        };
        const imgoption = {
          method: 'GET',
          headers:{
            Authorization : process.env.REACT_APP_IMG_API_KEY
          }
        }

        try {
        	const response = await fetch(url, options);
        	const result = await response.json();
          const response4 = await fetch(imgurl, imgoption);
          const img = await response4.json();
          if(result instanceof Array){
            const breakpoint = Math.floor((result.length)/2);
            const data1 = result.slice(0,breakpoint);
            const data2 = result.slice(breakpoint);
            setNews(data1);
            setTopn(data2);
            console.log("fetched")
            setIsLoading(false);
            dispatch(loadimg(img.photos));

          }else{
            setNews([]);
            setTopn([]);
            setIsLoading(false);

          }
          } catch (error) {
        	console.error(error);
        }
      setUserText('');

    }
    const renderNews = () => {
      if(!isloading){
        if(news.length>0){
          return (
            <>
              <div className="col-md-9 news-card-container p-3">
                  {
                  news[0] ?  news.map((newss, index)=>{
                    if(index>25){
                      return
                    }else{
                      return(
                        <a key={index} href={newss.url} target="_blank" rel="noreferrer" className="mb-3">
                          <div className="maincard">
                            <CardActionArea >
                              <img src={imgurls[index]} alt="img" className="img-fluid" height="110"/>
                              <div className="p-2">
                                <p className="newssource text-primary">{newss.source}</p><br />
                                <p className="newscontent">{newss.title.length > 60 ? `${newss.title.substring(0, 60)}...` : newss.title}</p>
                              </div>
                            </CardActionArea>
                          </div>
                        </a>
                      )
                    }
                    }) : <Skeleton active  className="mx-3"/>
                  }

              </div>
              <div className="col-md-3 p-0 pt-3 topnews-sec">
                    {
                      topn[0] ? <div className="card m-auto">
                      <div className="card-header text-light bg-primary">Top News</div>
                      <ul class="list-group border-0">
                        {
                        topn[5] ? topn.map((top, index)=>{
                          if(index>25){
                            return
                          }else{
                            return(
                              <a key={index} href={top.url} target="_blank" rel="noreferrer">
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
            </>
          )
        }else{
          return(
            <p className="text-center">No result found</p>
          )
        }
    }else{
      return(
      <div className="col-md-12">
        <Skeleton active  className="mx-3"/>
        <Skeleton active  className="mx-3"/>
      </div>
      )
    }
    }

  return (
    <div className="col-md-12 p-3 news-section">
        <div className="col-md-5 inputcontainer m-auto mt-4 ">
          <input type="email" placeholder="Enter cryptocurrency name eg: bitcoin" className="email-input" value={userText} onChange={(e)=>setUserText(e.target.value)}/>
          <button className="btn subscribe-btn" onClick={()=>getCryptoNews(userText)}>Search</button>
        </div>
        <div className="row mt-5">
             { renderNews() }
        </div>
    </div>
  )
};

export default News;
