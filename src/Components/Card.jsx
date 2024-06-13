import React from "react"
import { Avatar, Card, Typography } from 'antd';
// import moment from 'moment';
import millify from 'millify';
import moment from 'moment';
const { Text, Title } = Typography;


const Cardcomponent = ({coin, news, getcoin, getnews}) => {
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
            <a href={news.article_url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}><span className="news-title">{news.article_title.length >60 ? `${news.article_title.substring(0,60)}...` : news.article_title}</span></Title>
                <img className="img-fluid" src={news.article_photo_url} alt="img" height={240} width={100}/>
              </div>
              <p className="">{news.article_title.length > 80 ? `${news.article_title.substring(0, 80)}...` : news.article_title}</p>
              <div className="provider-container">
                <div>
                  <Text className="provider-name text-danger">{news.source}</Text>
                </div>
                <Text>{moment(news.post_time_utc).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
      </>
    )
  }
};

export default Cardcomponent;
