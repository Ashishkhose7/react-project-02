import React, { useEffect, useState } from "react"
import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';
import {useDispatch, useSelector} from 'react-redux';
import { globaldata, loadstats, loadcoins, loadnews, loadimg, coinsdata, newsdata, imgdata } from "../Reducers/globalstatReducers";
import { Skeleton } from 'antd';
import Cardcomponent from "./Card";
import { Link } from "react-router-dom";
const { Title } = Typography;

const Dashboard = () => {
  const stats = useSelector(globaldata);
  const topcoins = useSelector(coinsdata).slice(0,10);
  const topnews = useSelector(newsdata);
  const imgurls = useSelector(imgdata);
  const dispatch = useDispatch();

  useEffect(() => {
      const fetchStats = async()=>{
        const statsurl = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl';
        const coinsurl = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
        const newsurl = 'https://crypto-news16.p.rapidapi.com/news/top/10';
        const imgurl = 'https://api.pexels.com/v1/search?per_page=200&query=Cryptocurrency';
       
          const options1 = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
            }
          };

        const newsoption = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
            'x-rapidapi-host': 'crypto-news16.p.rapidapi.com'
          }
        };
       
        const imgoption = {
              method: 'GET',
              headers:{
                Authorization : process.env.REACT_APP_IMG_API_KEY
              }
            }

          try {

            const response1 = await fetch(statsurl, options1);
            const globalstats = await response1.json();
            
            const response2 = await fetch(coinsurl, options1);
            const coinstats = await response2.json();

            const response3 = await fetch(newsurl, newsoption);
            const news = await response3.json();
            
            const response4 = await fetch(imgurl, imgoption);
            const img = await response4.json();
            
            dispatch(loadstats(globalstats.data));
            dispatch(loadcoins(coinstats.data.coins));
            dispatch(loadnews(news));
            dispatch(loadimg(img.photos));
            
          } catch (error) {
            console.error(error);
          }
      }
      fetchStats();
  }, [])

  return (
    <div className="col-md-12 p-3">
      <div className="row global-stats">
        {
          stats.totalMarkets ? <Title level={3} className="heading"><span className="dash-heading">Global Crypto Stats</span></Title> : 'Global Crypto Stats'
        }
      
        {
          stats.totalMarkets ?
              <Row gutter={[30, 30]} className="my-3">
                <Col span={6}>
                  <div className="outline-div"><Statistic title="Total Cryptocurrencies" value={stats.totalCoins || 0} valueStyle={{color: 'darkslateblue'}}/></div>
                </Col>
                <Col span={6}>
                  <div className="outline-div">
                    <Statistic title="Total Exchanges" value={stats.totalExchanges || 0} valueStyle={{color: 'darkslateblue'}}/>
                  </div>
                
                </Col>
                <Col span={6}>
                  <div className="outline-div">
                    <Statistic title="Total Market Cap:" value={`$${millify(stats.totalMarketCap)}`} valueStyle={{color: 'darkslateblue'}}/>
                  </div>
                
                </Col>
                <Col span={6}>
                  <div className="outline-div">
                    <Statistic title="Total 24h Volume" value={`$${millify(stats.total24hVolume)}`} valueStyle={{color: 'darkslateblue'}}/>
                  </div>
                
                </Col>
                <Col span={6}>
                  <div className="outline-div">
                    <Statistic title="Total Markets" value={`${millify(stats.totalMarkets)}`} valueStyle={{color: 'darkslateblue'}}/>
                  </div>
                
                </Col>
              </Row>
           :  <Skeleton active />
        }     
      </div> 
       
      <div className="row top-crypto mt-5">
            {
              topcoins[4] ? <div className="home-heading-container">
              <Title level={3} className="heading"><span className="dash-heading">Top 10 Cryptos In The World</span></Title>
              <Title level={5} className="show-more mr-5"><Link to="/cryptocurrencies">Show more</Link></Title>

           </div> : 'Top 10 Cryptos In The World'
            }
            <Row gutter={[30,30]} className="crypto-card-container my-2">
             {
              topcoins[4] ? topcoins.map((coin, index)=>{
                    return(
                     <Col
                       md={6}
                       className="crypto-card"
                       key={coin.uuid}>
                        <Link to={`/crypto/${coin.uuid}`}>
                          <Cardcomponent coin={coin} getcoin/> 
                        </Link>
                     </Col>
                   )
                 }) : <Skeleton active  className="mx-3"/>
             }
             </Row>
      </div>
     
      <div className="row latest-news mt-5">
            {
              topnews[4] ? <div className="home-heading-container">
                 <Title level={3} className="heading"><span className="dash-heading">Latest Market News</span></Title>
                 <Title level={5} className="show-more mr-5"><Link to="/news">Show more</Link></Title>

              </div> : 'Latest Crypto News'
            }
            <Row gutter={[30,30]} className="crypto-card-container my-2">
             {
              topnews[4] ? topnews.map((newsd, topindex)=>{
                    return(
                          <Col
                            xs={24} sm={12} lg={8}
                              className="crypto-card"
                              key={topindex}>
                                <Cardcomponent news={newsd}  imgurl={imgurls.length>20 ? imgurls[topindex] : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s'} getnews/> 
                          </Col>
                        )
                 }) : <Skeleton active  className="mx-3"/>
             }
             </Row>
      </div>
    </div>
  )
};

export default Dashboard;
