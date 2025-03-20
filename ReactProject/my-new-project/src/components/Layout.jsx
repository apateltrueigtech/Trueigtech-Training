import { Outlet } from "react-router-dom";
import Header from './Header';
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        {/* <Outlet />  */}
        <Suspense fallback={<h1 className="text-2xl">Loading</h1>}>
            <Outlet/>
            </Suspense>
      </main>
    </div>
  );
};

export default Layout;
