import React, { useEffect, useState } from "react"
import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';
import {useDispatch, useSelector} from 'react-redux';
import { globaldata, loadstats, loadcoins, loadnews, coinsdata, newsdata } from "../Reducers/globalstatReducers";
import { Skeleton } from 'antd';
import Cardcomponent from "./Card";
import { Link } from "react-router-dom";
const { Title } = Typography;


const Dashboard = () => {
  const stats = useSelector(globaldata);
  const topcoins = useSelector(coinsdata);
  const topnews = useSelector(newsdata);
  // const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const [count, setCount] = useState(8)
  const dispatch = useDispatch();
  console.log(topnews);
  useEffect(() => {
      const fetchStats = async()=>{
        // const statsurl = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl';
        // const coinsurl = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
        // const newsurl = 'https://real-time-finance-data.p.rapidapi.com/stock-news?symbol=AAPL%3ANASDAQ&language=en';
         
        //   const options1 = {
        //     method: 'GET',
        //     headers: {
        //       'x-rapidapi-key': '53cafe9a16msh9e42f46b009f80ap11be03jsnec1d5f1aa24b',
        //       'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        //     }
        //   };
        //   const options2 = {
        //     method: 'GET',
        //     headers: {
        //       'x-rapidapi-key': '53cafe9a16msh9e42f46b009f80ap11be03jsnec1d5f1aa24b',
        //       'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
        //     }
        //   };

        //   try {
        //     const response1 = await fetch(statsurl, options1);
        //     const globalstats = await response1.json();
            
        //     const response2 = await fetch(coinsurl, options1);
        //     const coinstats = await response2.json();
          
        //     const response3 = await fetch(newsurl, options2);
	      //     const news = await response3.json();

        //     dispatch(loadstats(globalstats.data));
        //     dispatch(loadcoins(coinstats.data.coins));
        //     dispatch(loadnews(news.data.news));

            
          // } catch (error) {
          //   console.error(error);
          // }
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
                <Col span={8}><Statistic title="Total Cryptocurrencies" value={stats.totalCoins || 0} valueStyle={{color: 'darkslateblue'}}/></Col>
                <Col span={8}><Statistic title="Total Exchanges" value={stats.totalExchanges || 0} valueStyle={{color: 'darkslateblue'}}/></Col>
                <Col span={8}><Statistic title="Total Market Cap:" value={`$${millify(stats.totalMarketCap)}`} valueStyle={{color: 'darkslateblue'}}/></Col>
                <Col span={8}><Statistic title="Total 24h Volume" value={`$${millify(stats.total24hVolume)}`} valueStyle={{color: 'darkslateblue'}}/></Col>
                <Col span={8}><Statistic title="Total Markets" value={`${millify(stats.totalMarkets)}`} valueStyle={{color: 'darkslateblue'}}/></Col>
              </Row>
           :  <Skeleton active />
        }     
      </div> 
       
      <div className="row top-crypto mt-5">
            {
              topcoins[4] ? <Title level={3} className="heading"><span className="dash-heading">Top 10 Cryptos In The World</span></Title> : 'Top 10 Cryptos In The World'
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
              topnews[4] ? <Title level={3} className="heading"><span className="dash-heading">Latest Market News</span></Title> : 'Latest Crypto News'
            }
            <Row gutter={[30,30]} className="crypto-card-container my-2">
             {
              topnews[4] ? topnews.map((newsd, index)=>{
                    return(
                     <Col
                     xs={24} sm={12} lg={8}
                       className="crypto-card"
                       key={index}>
                        {/* <Link to={`/crypto/${coin.uuid}`}> */}
                          <Cardcomponent news={newsd} getnews/> 
                        {/* </Link> */}
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
