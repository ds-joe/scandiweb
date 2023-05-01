// Dependences
import { FC, lazy, useEffect } from "react";

// Routes
import { BrowserRouter } from "react-router-dom";

// Layout
import WebsiteLayout from "@/layouts";

// Assets
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/style.scss";

// Api 
import { create_products_table } from "./api/product/create_products_table";

const App: FC = () => {
   
  useEffect(() => {  
    create_products_table(); 
  }, [])

  return (
    <main className={``}>
    
      <BrowserRouter>
        <WebsiteLayout />
      </BrowserRouter>
    </main>
  )
}

export default App;