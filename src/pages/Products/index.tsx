// Dependences
import { FC, useEffect, useState, lazy } from "react";

// Router
import { NavLink } from "react-router-dom";

// Components
import Header from "@/components/Header";
import Product from "@/components/Product";

// Interfaces
import { ProductProps } from "@/components/Product";

// Apis
import { get_products } from "@/api/product/get_products";
import { remove_products } from "@/api/product/remove_products";

const Products: FC = () => {
  const [products, setProducts] = useState<ProductProps[]|null>(null);


  // Get Products
  const get_all_products = async () => {
    try {
      const response = await get_products();
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Delete Products
  const handleRemoveProducts = async () => {
    var sku_keys: string[] = [];
    const checkboxs = document.querySelectorAll(".delete-checkbox");
    
    // Push All Selected Products
    checkboxs.forEach((element) => {
      element.className.search("checked") >= 0 && sku_keys.push(element.getAttribute("product-key") as string);
    })

    try {
      const response = await remove_products(sku_keys);
      response.data.state && await get_all_products();
    } catch (error) {
      console.error(error)
    }

  }

  // Get Products
  useEffect(() => {
    get_all_products();
  }, [])

  return (
    <div className="mb-3">
      <Header title="Products List">
        <div className="d-flex align-items-center gap-1">
          <NavLink to="/addproduct" ><button className="btn btn-outline-primary">ADD</button></NavLink>
          <button className="btn btn-outline-danger" id="delete-product-btn" onClick={handleRemoveProducts}>MASS DELETE</button>
        </div>
      </Header>

      <div className="container ">
        <div className="productsContainer">
          {
           products ? products.map((product) => (
              <Product sku={product.sku} name={product.name} price={product.price} type={product.type} value={product.value} key={product.key} />
            )) : <div className="d-flex w-100 justify-content-center"><span className="spinner"></span></div>
          }
        </div>
      </div>
    </div>
  )
}

export default Products;