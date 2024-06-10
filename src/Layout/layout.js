import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import '../App.css';
const LayoutComponent = () => {
    return (
      <div className="container-fluid">
          <div className="row">
            <div className="navigation col-md-3 border border-success">
              <Navigation/>
            </div>
            <div className="content col-md-9 border border-success">
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