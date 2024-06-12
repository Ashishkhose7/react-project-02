import React from "react"
import { Avatar, Card } from 'antd';
// import moment from 'moment';
import millify from 'millify';

const Cardcomponent = ({coin, getcoin, getnews}) => {
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
       {/* <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card> */}
      </>
    )
  }
};

export default Cardcomponent;
