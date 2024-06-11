import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom";

const Navigation = (props) => {
  const [tab, setTab] = useState("");
  const location = useLocation();

  useEffect(() => {
      const path = location.pathname;
      if(path == '/dashboard'){
        setTab(path);
      }else if(path == '/cryptocurrencies'){
        setTab(path);
      }else if(path == '/exchanges'){
        setTab(path);
      }else if(path == '/news'){
        setTab(path);
      }
  }, [location.pathname])

  return (
    <div className="navigation-sec">
         <div className="row">
          <div className="col-12 brand py-3 text-center">
            <img src="https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png" alt="" className="img-fluid" height={35} width={35}/>
             &nbsp; <span>CRYPTo</span>
          </div>
          <div className="col-11 p-0 m-auto menus mt-3 py-3 text-center">
            <div className="row d-flex justify-content-center mx-1">
                <div className="col-5 m-0 p-0 mb-4 text-center">
                  <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}> 
                      <div className={tab=='/dashboard'? 'manu-tab': 'menu-btn'}>
                        <i className="fa-solid fa-bars"></i>
                      </div>
                      <span>Dashboard</span>
                  </NavLink>
                </div>
                <div className="col-5 m-0 p-0 mb-4">
                  <NavLink to="/cryptocurrencies" className={({ isActive }) => (isActive ? 'active' : '')}>
                      <div className={tab=='/cryptocurrencies'? 'manu-tab': 'menu-btn'}>
                        <i className="fa-solid fa-baht-sign"></i>
                      </div>
                      <span>Currency</span>
                  </NavLink>
                </div>
                <div className="col-5 m-0 p-0 mb-4">
                  <NavLink to="/exchanges" className={({ isActive }) => (isActive ? 'active' : '')}>
                      <div className={tab=='/exchanges'? 'manu-tab': 'menu-btn'}>
                      <i className="fa-solid fa-building"></i>
                      </div>
                      <span>Exchanges</span>
                  </NavLink>
                </div>
                <div className="col-5 m-0 p-0 mb-4">
                  <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')}>
                      <div className={tab=='/news'? 'manu-tab': 'menu-btn'}>
                      <i className="fa-solid fa-lightbulb"></i>
                      </div>
                      <span>News</span>
                  </NavLink>
                </div>
              
              </div>

          </div>
         </div>
    </div>
  )
};

export default Navigation;
