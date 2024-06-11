import React, { useEffect } from "react"
import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';
import {useDispatch, useSelector} from 'react-redux';
import { globaldata, loadstats, loadcoins, coinsdata } from "../Reducers/globalstatReducers";
import { Skeleton } from 'antd';
import Cardcomponent from "./Card";
const { Title } = Typography;


const Dashboard = () => {
  const stats = useSelector(globaldata);
  const coins = useSelector(coinsdata);
  const dispatch = useDispatch();
  
  useEffect(() => {
      const fetchStats = async()=>{
        const statsurl = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl';
        const coinsurl = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
         
        const options = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '53cafe9a16msh9e42f46b009f80ap11be03jsnec1d5f1aa24b',
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
            }
          };

          try {
            const response1 = await fetch(statsurl, options);
            const globalstats = await response1.json();
            
            const response2 = await fetch(coinsurl, options);
            const coinstats = await response2.json();
          
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
      <Title level={3} className="heading"><span className="dash-heading">Global Crypto Stats</span></Title>
        {
          stats.totalMarkets ?
              <Row gutter={[30, 30]} className="my-3">
                <Col span={8}><Statistic title="Total Cryptocurrencies" value={stats.totalCoins || 0} valueStyle={{color: 'darkslateblue'}}/></Col>
                <Col span={8}><Statistic title="Total Exchanges" value={stats.totalExchanges || 0} valueStyle={{color: 'darkslateblue'}}/></Col>
                <Col span={8}><Statistic title="Total Market Cap:" value={`$${millify(stats.totalMarketCap)}`} valueStyle={{color: 'darkslateblue'}}/></Col>
                <Col span={8}><Statistic title="Total 24h Volume" value={`$${millify(stats.total24hVolume)}`} valueStyle={{color: 'darkslateblue'}}/></Col>
                <Col span={8}><Statistic title="Total Markets" value={`$${millify(stats.totalMarkets)}`} valueStyle={{color: 'darkslateblue'}}/></Col>
              </Row>
           :  <Skeleton active />
        }     
      </div>  
      <div className="row top-crypto mt-4">
          <Title level={3} className="heading"><span className="dash-heading">Top 10 Cryptos In The World</span></Title>
          <div className="card-div my-3">
             <Cardcomponent />
          </div>
      </div>
        

    </div>
  )
};

export default Dashboard;
