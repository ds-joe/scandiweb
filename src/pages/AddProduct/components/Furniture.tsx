// Dependences
import { FC, useState, useEffect } from "react";

// Props Types
type FurnitureProps = {
  setValue: (value: string) => void,
  value: string
}

const Furniture: FC<FurnitureProps> = ({ setValue, value }) => {

  const [height, setHeight] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [length, setLength] = useState<string>("");

  useEffect(() => {
    if (width !== "" && Number(width) > 0 &&
      height !== "" && Number(height) > 0
      && length !== "" && Number(length) > 0) {
      setValue(`${height}x${width}x${length}`)
    } else {
      setValue(``);
    }
  }, [height, width, length])


  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <label htmlFor="height">Height</label>
            <input className={`form-control ${height !== "" && Number(height) > 0 ? "is-valid" : "is-invalid"}`} id="height" type="number" placeholder="Height" onChange={(e: any) => setHeight(e.target.value)} />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="form-group">
            <label htmlFor="width">Width</label>
            <input className={`form-control ${width !== "" && Number(width) > 0 ? "is-valid" : "is-invalid"}`} id="width" type="number" placeholder="Width" onChange={(e: any) => setWidth(e.target.value)} />
          </div>
        </div>

        <div className="col-12 my-2">
          <div className="form-group">
            <label htmlFor="length">Length</label>
            <input className={`form-control ${length !== "" && Number(length) > 0 ? "is-valid" : "is-invalid"}`} id="length" type="number" placeholder="Lenght" onChange={(e: any) => setLength(e.target.value)} />
          </div>
        </div>
        <p className="fw-bold mt-2 ">Please, provide dimensions height / width / length</p>

      </div>
    </>
  )
}

export default Furniture;