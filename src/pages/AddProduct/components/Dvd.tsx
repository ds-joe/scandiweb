// Dependences
import { FC } from "react";

// Props Types
type DvdProps = {
  setValue: (value: string) => void,
  value: string
}

const Dvd: FC<DvdProps> = ({ setValue, value }) => {


  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group">
          <label htmlFor="size">Size (MB)</label>
          <input className={`form-control ${value !== "" ? "is-valid" : "is-invalid"}`} id="size" type="number" placeholder="Size" onChange={(e: any) => Number(e.target.value) > 0 ? setValue(e.target.value) : setValue("")} />
        </div>
        <p className="fw-bold mt-2">Please, provide size</p>
      </div>
    </div>
  )
}

export default Dvd;