// Dependences
import { FC } from "react";

// Interface
interface TypeConverterProps  {
  type:string;
  value: string|number;
}

const TypeConverter:FC<TypeConverterProps> = ({ type, value })=>{
  return (
    <>
      { type.toUpperCase() === "DVD" && <p>Size: <span>{value} MB</span></p> }
      { type.toUpperCase() === "BOOK" && <p>Weight: <span>{value} KG</span></p> }
      { type.toUpperCase() === "FURNITURE" && <p>Dimensions: <span>{value}</span></p> }
    </>
  )
  
}

export default TypeConverter;