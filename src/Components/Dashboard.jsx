import React, { useEffect, useState } from "react"
import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';
import {useDispatch, useSelector} from 'react-redux';
import { globaldata, loadstats, loadcoins, coinsdata } from "../Reducers/globalstatReducers";
import { Skeleton } from 'antd';
import Cardcomponent from "./Card";
import { Link } from "react-router-dom";
const { Title } = Typography;


const Dashboard = () => {
  const stats = useSelector(globaldata);
  const topcoins = useSelector(coinsdata);
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const [count, setCount] = useState(8)
  const dispatch = useDispatch();
  
  useEffect(() => {
      const fetchStats = async()=>{
        const statsurl = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl';
        const coinsurl = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
        // const newsurl = 'https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&freshness=Day&textFormat=Raw&safeSearch=Off';
         
        const options1 = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '53cafe9a16msh9e42f46b009f80ap11be03jsnec1d5f1aa24b',
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
            }
          };
          // const options2 = {
          //   method: 'GET',
          //   headers: {
          //     'x-rapidapi-key': '53cafe9a16msh9e42f46b009f80ap11be03jsnec1d5f1aa24b',
          //     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          //     'X-BingApis-SDK': 'true'
          //   }
          // };

          try {
            const response1 = await fetch(statsurl, options1);
            const globalstats = await response1.json();
            
            const response2 = await fetch(coinsurl, options1);
            const coinstats = await response2.json();
          
            // const response = await fetch(newsurl, options2);
	          // const result = await response.json();
            // console.log(result,"newsapi");

            dispatch(loadstats(globalstats.data));
            dispatch(loadcoins(coinstats.data.coins));
            
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
          stats.totalMarkets ? <Title level={3} className="heading"><span className="dash-heading">Global Crypto Stats</span></Title> : ''
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
              topcoins[9] ? <Title level={3} className="heading"><span className="dash-heading">Top 10 Cryptos In The World</span></Title> : ''
            }
            <Row gutter={[30,30]} className="crypto-card-container my-2">
             {
              topcoins[9] ? topcoins.map((coin, index)=>{
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
              topcoins[9] ? <Title level={3} className="heading"><span className="dash-heading">Latest Crypto News</span></Title> : ''
            }
            <Row gutter={[30,30]} className="crypto-card-container my-2">
             {
              topcoins[9] ? topcoins.map((coin, index)=>{
                    return(
                     <Col
                       md={6}
                       className="crypto-card"
                       key={coin.uuid}>
                        <Link to={`/crypto/${coin.uuid}`}>
                          <Cardcomponent getnews/> 
                        </Link>
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
