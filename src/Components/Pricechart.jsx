import React from "react"
import { Col, Row, Typography } from 'antd';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';



const { Title } = Typography;

const Pricechart = ({ coinHistory, currentPrice, coinName, priceChange }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (const key in coinHistory) {
      coinPrice.push(coinHistory[key].price);
      coinTimestamp.push(new Date(coinHistory[key].timestamp * 1000).toLocaleDateString());
    }


    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: 'mediumseagreen',
            borderColor: 'lime',
            border: '1px solid'
          },
        ],
      };
    
      const options = {
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true,
        //       },
        //     },
        //   ],
        // },
      };



  return (
    <div className="col-md-12 chart">
    <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {priceChange}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
    </Row>
    <Line data={data} options={options} />
    </div>
  )
};

export default Pricechart;
