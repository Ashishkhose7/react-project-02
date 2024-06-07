import { Outlet } from "react-router-dom";

const LayoutComponent = () => {
    return (
      <div>
        <header className='border border-success py-2'>Header Content</header>
        <main>
        {/* all router render here */}
          <Outlet/>
        </main>
        <footer className='border border-success py-2'>Footer Content</footer>
      </div>
    );
  }
export default LayoutComponent;  