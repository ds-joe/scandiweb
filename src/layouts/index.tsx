// Dependences
import {FC} from "react";

// Router
import {Routes, Route} from "react-router-dom";

// Layout
import Layout from "./Layout";

// Pages
import Products from "@/pages/Products";
import AddProduct from "@/pages/AddProduct";


const WebsiteLayout:FC = ()=>{
  return ( 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Route>
    </Routes>
  )
}

export default WebsiteLayout;