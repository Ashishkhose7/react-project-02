import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
import '../App.css';
import { useEffect } from "react";
const LayoutComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("dashboard")
  }, [])
  
    return (
      <div className="container-fluid">
          <div className="row">
            <div className="navigation col-md-2">
              <Navigation/>
            </div>
            <div className="content col-md-10 border border-success">
              <Outlet/>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 border border-success">
              <footer className="">Footer Component</footer>
            </div>
          </div>

      </div>
    );
  }
export default LayoutComponent;  