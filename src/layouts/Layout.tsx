// Dependences
import {FC, lazy, Suspense} from "react";

// Router
import {Outlet} from "react-router-dom";

// Components
const Footer = lazy(()=> import("@/components/Footer"));
const Loading = lazy(()=> import("@/components/Loading"));

const Layout:FC = ()=>{
  return (
    <Suspense fallback={<Loading />}>
      <main className="py-4">
        <Outlet />
        <Footer />
      </main>
    </Suspense>
  )
}

export default Layout;