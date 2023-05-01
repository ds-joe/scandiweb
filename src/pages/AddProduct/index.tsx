// Dependences
import { FC, useState } from "react";

// Router
import { NavLink, useNavigate } from "react-router-dom";

// Components
import Header from "@/components/Header";
import Book from "./components/Book";
import Dvd from "./components/Dvd";
import Furniture from "./components/Furniture";

// Apis
import { create_product } from "@/api/product/create_product";

const AddProduct: FC = () => {
  const navigate = useNavigate();
  const [productType, setProductType] = useState<string>("dvd");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [sku, setSku] = useState<string>("");
  const [resultValue, setResultValue] = useState<string>("");

  // Product Type Change
  const handleProductType = (event: any) => {
    setProductType(event.target.value);
    setResultValue("");
  }

  // Create Product
  const handleCreateProduct = async () => {
    if (productType !== "" && name !== "" && price !== "" && Number(price) > 0 && sku !== "" && resultValue !== "") {

      try {
        const response = await create_product(sku, productType, name, Number(price), resultValue);
        response.data.state ? navigate("/") : alert(response.data.message);

      } catch (error) {
        console.error(error)
      }

    } else {
      alert("Please, submit required data")
    }
  }
  
  return (
    <>
      <Header title="Products Add">
        <div className="d-flex align-items-center gap-1">
          <button className="btn btn-outline-primary" onClick={handleCreateProduct}>Save</button>
          <NavLink to="/"><button className="btn btn-outline-danger" id="delete-product-btn">Cancel</button></NavLink>
        </div>
      </Header>
      <div className="container">
        <form className="my-4 addProductForm">

          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label htmlFor="sku">SKU</label>
                <input className={`form-control ${sku === "" ? "is-invalid" : "is-valid"}`} id="sku" type="text" placeholder="SKU" onChange={(e) => setSku(e.target.value)} />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className={`form-control ${name === "" ? "is-invalid" : "is-valid"}`} type="text" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label htmlFor="price">Price ($)</label>
                <input className={`form-control ${price !== "" && Number(price) > 0 ? "is-valid" : "is-invalid"}`} id="price" type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label htmlFor="productType">Type Switcher</label>
                <select className={`form-control ${productType === "" ? "is-invalid" : "is-valid"}`} id="productType" onChange={handleProductType}>
                  <option value="dvd">DVD</option>
                  <option value="book">Book</option>
                  <option value="furniture">Furniture</option>
                </select>
              </div>
            </div>
          </div>
          {productType === "dvd" && <Dvd value={resultValue} setValue={setResultValue} />}
          {productType === "book" && <Book value={resultValue} setValue={setResultValue} />}
          {productType === "furniture" && <Furniture value={resultValue} setValue={setResultValue} />}

        </form>
      </div>
    </>
  )
}

export default AddProduct;
