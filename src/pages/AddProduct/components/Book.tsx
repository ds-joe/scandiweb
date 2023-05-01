// Dependences
import { FC } from "react";

// Props Types
type BookProps = {
  setValue: (value: string) => void,
  value: string
}


const Book: FC<BookProps> = ({ setValue, value }) => {

  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group">
          <label htmlFor="weight">Weight (KG)</label>
          <input className={`form-control  ${value !== "" ? "is-valid" : "is-invalid"}`} id="weight" type="number" placeholder="Weight" onChange={(e: any) => Number(e.target.value) > 0 ? setValue(e.target.value) : setValue("")} />
        </div>
      </div>
      <p className="fw-bold mt-2 ">Please, provide weight</p>

    </div>
  )
}

export default Book;