import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

import '../App.css';
const LayoutComponent = () => {
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
          <div className="footer-section text-center">
            <Footer/>
          </div>
       </div>
    );
  }
export default LayoutComponent;  