import React from "react"
import {  Card, Typography } from 'antd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// import moment from 'moment';
import millify from 'millify';
import moment from 'moment';
const { Text, Title } = Typography;


const Cardcomponent = ({coin, news, getcoin, getnews, imgurl}) => {
  if(getcoin){
    const change = Math.sign(Number(coin.change));
    return(
      <Card
      className="topcryptocard"
        title={`${coin.rank}. ${coin.name}`}
        extra={<img className="crypto-image" src={coin.iconUrl} alt="img" height={32} width={32} />}
        style={{
            width: 250,
            borderRadius: 18,
            boxShadow: '0 0 20px rgb(244 237 237)',
            border: 0
        }}
        hoverable
        >
        <p className="text-muted">Price: {millify(coin.price)}</p>
        <p className="text-muted">Market Cap: {millify(coin.marketCap)}</p>
        <p className="text-muted d-flex align-items-center">Daily Change:&nbsp; <span className={change===1?'text-success positivechangep':'text-danger negativechangep'}>&nbsp;
          { change===1 ? <TrendingUpIcon style={{fontSize: 21}}/> : <TrendingDownIcon style={{fontSize: 21}}/> }
          &nbsp;{coin.change}%</span></p>
      </Card>
    )
  }else if(getnews){
    return(
      <>
       <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title mx-1" level={4}><span className="news-title">{news.title.length >50 ? `${news.title.substring(0,50)}...` : news.title}</span></Title>
                 <img className="img-fluid" src={imgurl} alt="img" height={240} width={100}/>
              </div>
              <p className="">{news.description.length > 60 ? `${news.description.substring(0, 60)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Text className="provider-name text-danger">{news.url.split('.')[1]}</Text>
                </div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
      </>
    )
  }
};

export default Cardcomponent;
