import React from "react"
import Cardcomponent from "../Components/Card";
import { coinsdata } from "../Reducers/globalstatReducers";
import { useSelector } from "react-redux";
import { Row, Col, Skeleton } from 'antd';
import { Link } from "react-router-dom";

const Cryptocurrency = () => {
  const coins = useSelector(coinsdata);

  return (
    <div className="col-md-12 p-3">
        <h4>Cryptocurrency</h4>
        <Row gutter={[30,30]} className="crypto-card-container mt-5">
             {
              coins[4] ? coins.map((coin, index)=>{
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
  )
};

export default Cryptocurrency;
