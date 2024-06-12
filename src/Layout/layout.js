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
      <div className="container-fluid m-0 p-0">
          <div className="flex-container">
            <div className="flex-item item1 navigation">
              <Navigation/>
            </div>
            <div className="flex-item item2 content">
              <Outlet/>
            </div>
          </div>
           <div className="row m-0 p-0">
             <div className="col-md-12 border border-success">
               <footer className="">Footer Component</footer>
             </div>
           </div>

       </div>
    );
  }
export default LayoutComponent;  