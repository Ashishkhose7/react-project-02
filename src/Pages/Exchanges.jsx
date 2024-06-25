import React, { useEffect } from "react"
import millify from 'millify';
import { useState } from "react";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const Exchanges = (props) => {
  const [exchanges, setExchages] = useState([]);

  useEffect(() => {
    const fetchStats = async() => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-iNUk9rti1mViHHgQSmT1hHz8'}
    };
      const response = await fetch('https://api.coingecko.com/api/v3/exchanges', options);
      const data = await response.json();
      setExchages(data);
    }
    fetchStats();
  }, [])

  return (
    
    <div className="col-md-12 p-3 exchanges">
         <table class="table">
          <thead class="table-light">
          <tr>
            <th scope="col" className="px-5">Rank</th>
            <th scope="col-2" style={{width: '30%'}}>Exchanges</th>
            <th scope="col" style={{width: '25%'}}>24h Trade Volume</th>
            <th scope="col" style={{width: '20%'}}>Trust Score&nbsp;
            <LightTooltip title="Trust Score is a rating algorithm developed to evaluate the legitimacy of an exchange’s trading volume. Trust Score is calculated on a range of metrics such as liquidity, scale of operations, cybersecurity score, and more. ">
                <InfoOutlinedIcon style={{cursor: 'pointer'}}/>
            </LightTooltip>
            </th>
            <th scope="col" style={{width: '10%'}}>Web</th>
          </tr>
          </thead>
          <tbody>
            {
              exchanges.map((i,index)=>{
                return(
                  <tr>
                    <th scope="row" className="px-5">{i.trust_score_rank}</th>
                    <td>
                      <img src={i.image} alt="" height={25} width={25} />
                    &nbsp; {i.name}
                    </td>
                    <td>${millify(i.trade_volume_24h_btc_normalized)}</td>
                    <td><span class={i.trust_score>7 ? "badge text-bg-success" : "badge text-bg-warning"}>{i.trust_score}/10</span>
                    </td>
                    <td><a href={i.url} target="_blank" className="text-primary hover">See</a></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
};

export default Exchanges;
