import React from "react"
import { Card } from 'antd';
import millify from 'millify';

const Cardcomponent = (props) => {
  return (
    <>
      <Card
        title="1. Bitcoin"
        extra={<a href="/duumy">More</a>}
        style={{
            width: 260,
        }}
        hoverable
        >
        <p className="text-muted">Price: {millify(48600)}</p>
        <p className="text-muted">Market Cap: {millify(91600)}</p>
        <p className="text-muted">Daily Change: {1.86}%</p>
        </Card>
    </>
  )
};

export default Cardcomponent;
