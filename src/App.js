import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent  />,
    children: [
      {
        index: true,
        element: <Home />,
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


function LayoutComponent() {
  return (
    <div>
      <header className='border border-success py-2'>Header Content</header>
      <main>
        <Outlet/>
      </main>
      <footer className='border border-success py-2'>Footer Content</footer>
    </div>
  );
}

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
