import React from "react"
import { Link, NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navigation-sec">
         <div className="row">
          <div className="col-12 brand py-3 text-center">
            <img src="https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png" alt="" className="img-fluid" height={35} width={35}/>
             &nbsp; <span>CRYPTo</span>
          </div>

          <div className="col-12 menus py-3 text-center">
            <div className="row mx-1">
                <div className="col-6">
                  <NavLink to="dashboard" className={({ isActive }) => (isActive ? 'active' : '')}
                  >Dashboard</NavLink>
                </div>
                <div className="col-6">
                  <NavLink to="cryptocurrencies" className={({ isActive }) => (isActive ? 'active' : '')}
                  >Currencies</NavLink>
                </div>
                <div className="col-6">
                  <NavLink to="exchanges" className={({ isActive }) => (isActive ? 'active' : '')}
                  >Exchanges</NavLink>
                </div>
                <div className="col-6">
                  <NavLink to="news" className={({ isActive }) => (isActive ? 'active' : '')}
                  >News</NavLink>
                </div>
              
              </div>

          </div>
         </div>
    </div>
  )
};

export default Navigation;
