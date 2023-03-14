import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    {/* Selesai Header */}

    {/* Membuat Navbar di atas Header */}
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Simple Header
        </a>
        <ul className="nav justify-content-end nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">FAQs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">About</a>
          </li>
        </ul>
      </div>
    </nav>
    {/* Selesai NavBar */}
    <div className="container " />
    <main>
      {/* Membuat Body Pada Web */}
      <div className="container">
        <a className="navbar-logo" href="#">
          <img className="logo" src="bootstrap-logo.svg.svg" alt="Bootstrap" />
        </a>
        <h2>Create Product</h2>
        <p>
          Below is an example form built entirely with Bootstrap’s form controls.
          Each required form group has a<br />
          validation state that can be triggered by attempting to submit the form
          without completing it.
        </p>
      </div>
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
                <h5 style={{ fontSize: 23 }}>Detail Product</h5>
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
                  <div className="invalid-feedback">
                    Please fill out this field
                  </div>
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
                  <div className="invalid-feedback">
                    Please fill out this field
                  </div>
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
      {/* Membuat Tabel  */}
      <div style={{ padding: 20 }}>
        <hr />
        <h2 style={{ textAlign: "center" }}>List Product</h2>
        <div className="d-flex justify-content-center" style={{ padding: 20 }}>
          <form className="d-flex" role="search" id="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Product Name"
              aria-label="Search"
              id="cari"
            />
            <button className="btn btn-outline-primary" id="button-search">
              Search
            </button>
            <button className="btn btn-danger" id="btnhapus">
              Delete
            </button>
          </form>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Image of Product</th>
                <th>Product Freshness</th>
                <th>Additional Description</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody id="datatable"></tbody>
          </table>
        </div>
      </div>
    </main>
  </>
  
  
  )
}

export default App
