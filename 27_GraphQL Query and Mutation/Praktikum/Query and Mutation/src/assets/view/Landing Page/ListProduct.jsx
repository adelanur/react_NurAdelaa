import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_PRODUCT = gql`
  query getProduct {
    product {
      deskripsi
      freshness
      id
      kategori
      nama
      price
      foto
    }
  }
`;

const ListProduct = () => {
  const {
    loading: loadingGetProduct,
    data: dataGetProduct,
    error: errorGetProduct,
  } = useQuery(GET_PRODUCT);
  return (
    <div>
      <div className="container">
        <h2 className="mt-5">PRODUCT LIST</h2>
        <div className=" row justify-content-center mt-5 ">
          <input
            type="text"
            className="d-inline ms-2 mb-5 rounded-3"
            style={{ width: "25rem", backgroundColor: "white", color: "black" }}
            placeholder="Enter product name...."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-primary d-inline mb-5 ms-4"
            style={{ width: "10rem" }}
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <div className="row">
          {dataGetProduct?.product.map((item, index) => {
            return (
              <div className="col-4 mb-3" key={index + 1}>
                <div className="card ms-5  " style={{ width: "18rem" }}>
                  <img src="/buku.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="mb-3 card-text">{item.nama}</p>
                    <Link to={`/DetailProduct/${item.id}`}>
                      <button className="btn btn-primary ms-5"> DETAIL</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
