import React from "react"
import { Avatar, Card, Typography } from 'antd';
// import moment from 'moment';
import millify from 'millify';
import moment from 'moment';
const { Text, Title } = Typography;


const Cardcomponent = ({coin, news, getcoin, getnews, source, imgurl, randomNumber}) => {
  if(getcoin){
    const change = Math.sign(Number(coin.change));
    // console.log(coin);
    return(
      <Card
        title={`${coin.rank}. ${coin.name}`}
        extra={<img className="crypto-image" src={coin.iconUrl} height={32} width={32} />}
        style={{
            width: 260,
        }}
        hoverable
        >
        <p className="text-muted">Price: {millify(coin.price)}</p>
        <p className="text-muted">Market Cap: {millify(coin.marketCap)}</p>
        <p className="text-muted">Daily Change: <span className={change==1?'text-success':'text-danger'}>&nbsp;<i className={change==1?'fa-solid fa-sort-up changeicon1':'fa-solid fa-sort-down changeicon2'}></i>&nbsp;{coin.change}%</span></p>
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
                  <Text className="provider-name text-danger">{source}</Text>
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
