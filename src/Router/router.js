import { createBrowserRouter } from "react-router-dom";

import LayoutComponent from "../Layout/layout";
// import Home from '../Pages/Home'
import Dashboard from "../Components/Dashboard";
import Cryptocurrency from "../Pages/Cryptocurrency";
import Exchanges from "../Pages/Exchanges";
import News from "../Pages/News";
import Cryptodetails from "../Pages/Cryptodetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent  />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "cryptocurrencies",
          element: <Cryptocurrency />,
        },
        {
          path: "exchanges",
          element: <Exchanges />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: '/crypto/:coinId',
          element: <Cryptodetails/>
        },
        {
          path: '*',
          element: <div>Not Found</div>,
        },
      ],
    },
  ]);

  export default router;