// Dependences
import { FC, useState } from "react";

// Components
import TypeConverter from "./TypeConverter";

// Interface
export interface ProductProps {
  sku: string,
  key: number,
  name: string | number,
  price: string | number,
  value: string | number,
  type: string
}

const Product: FC<ProductProps> = ({ sku, key, name, price, value, type }) => {
  const [checked, setChecked] = useState<boolean>(false);


  return (
    <article key={key} className="card product-card">
        <div className="align-self-start">
          <input type="checkbox" className={`form-check-input delete-checkbox ${checked && "checked"}`} onClick={() => setChecked(current => !current)} product-key={sku} />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <span>{sku}</span>
          <span>{name}</span>
          <span>{price} $</span>
          <TypeConverter type={type} value={value} />
        </div>
    </article>
  );
}

export default Product;