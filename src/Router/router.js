import { createBrowserRouter } from "react-router-dom";

import LayoutComponent from "../Layout/layout";
// import Home from '../Pages/Home'
import About from '../Pages/About';
import Dashboard from "../Components/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent  />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: '*',
          element: <div>Not Found</div>,
        },
      ],
    },
  ]);

  export default router;