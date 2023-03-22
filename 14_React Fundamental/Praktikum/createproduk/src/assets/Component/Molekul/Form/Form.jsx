import React from 'react'

const Form = () => {
  return (
    <div>
      <>
  {/* Membuat Form */}
  <div className="container">
    <div className="row">
      <div className="row justify-content-center">
        <div className="col">
          <form
            className="justify-content-end needs-validation"
            id="form"
            noValidate=""
          >
            <h2 style={{ fontSize: 23 }}>Detail Product</h2>
            {/* Product Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name{" "}
              </label>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="produk-name"
                  required=""
                />
              </div>
            </div>
            {/* Product Category */}
            <div className="mb-3 col-5">
              <label htmlFor="productcategory" className="form-label">
                Product Category{" "}
              </label>
              <select
                className="form-select"
                aria-label="productcategory"
                aria-placeholder="Choose...."
                id="kategori1"
                required=""
              >
                <option value="A">One</option>
                <option value="B">Two</option>
                <option value="C">Three</option>
              </select>
              <div className="invalid-feedback">
                Please choose a Product Category
              </div>
            </div>
            {/* Image of Product */}
            <div className="mb-3">
              <label htmlFor="imageofproduct" className="form-label">
                Image of Product
              </label>
              <div className="col-6">
                <input
                  className="form-control btn btn-primary "
                  type="file"
                  id="imagefile"
                  required=""
                />
              </div>
              <div className="invalid-feedback">Please choose an Image</div>
            </div>
            {/* Product Freshness */}
            <div className="mb-3">
              <label htmlFor="productfreshness" className="form-label">
                Product Freshness{" "}
              </label>
              <div id="form-check has-validation">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="freshness"
                    id="freshness"
                    defaultValue="Brand New"
                  />
                  <label className="form-check-label" htmlFor="brandnew">
                    Brand New
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="freshness"
                    id="freshness"
                    defaultValue="Second Hand"
                  />
                  <label className="form-check-label" htmlFor="secondhand">
                    Second Hand
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="freshness"
                    id="freshness"
                    defaultValue="Refurbished"
                  />
                  <label className="form-check-label" htmlFor="Refurbished">
                    Refurbished
                  </label>
                </div>
              </div>
            </div>
            {/* Additional Description*/}
            <label htmlFor="additionaldescription" className="form-label">
              Additional Description
            </label>
            <div className="input-group">
              <textarea
                className="form-control"
                aria-label="With textarea"
                id="additionaldescription"
                cols={80}
                rows={6}
                required=""
                defaultValue={" "}
              />
              <div className="invalid-feedback">Please fill out this field</div>
            </div>
            {/* Produk Price */}
            <label htmlFor="productprice" className="form-label">
              Product Price{" "}
            </label>
            <div className="mb-3">
              <div className="col-2">
                <input
                  type="number"
                  className="form-control"
                  id="produk-price"
                  placeholder="$ 100"
                  required=""
                />
              </div>
              <div className="invalid-feedback">Please fill out this field</div>
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#submit"
                id="btntambah"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>


    </div>
  )
}

export default Form
