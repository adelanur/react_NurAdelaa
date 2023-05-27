import React from "react";
import { Form, Header, Tabel } from "../../molekul";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import CreateProduct from "../CreateProduct/CreateProduct";
import { useSelector } from "react-redux";
import { gql, useSubscription } from "@apollo/client";

const GET_PRODUCT_BY_ID = gql`
  subscription getProductById($_eq: uuid!) {
    product(where: { id: { _eq: $_eq } }) {
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
const DetailProduct = ({ data }) => {
  const { id } = useParams();
  const {
    loading: loadingGetProductById,
    data: dataGetProductById,
    error: errorGetProductById,
  } = useSubscription(GET_PRODUCT_BY_ID, {
    variables: { _eq: id },
  });
  return (
    <div>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-6 p-5">
            <table className="table table-striped table-bordered text-center">
              <tbody>
                <tr>
                  <td className="bg-success text-white">ID</td>
                  <td>{dataGetProductById?.product[0].id}</td>
                </tr>
                <tr>
                  <td className="bg-success text-white">NAMA PRODUCT</td>
                  <td>{dataGetProductById?.product[0].nama}</td>
                </tr>
                <tr>
                  <td className="bg-success text-white">CATEGORY PRODUCT</td>
                  <td>{dataGetProductById?.product[0].kategori}</td>
                </tr>
                <tr>
                  <td className="bg-success text-white">IMAGE</td>
                  <td>{dataGetProductById?.product[0].foto}</td>
                </tr>
                <tr>
                  <td className="bg-success text-white">PRODUCT FRESHNESS</td>
                  <td>{dataGetProductById?.product[0].freshness}</td>
                </tr>
                <tr>
                  <td className="bg-success text-white">DESKRIPSI</td>
                  <td>{dataGetProductById?.product[0].deskripsi}</td>
                </tr>
                <tr>
                  <td className="bg-success text-white">PRICE</td>
                  <td>{dataGetProductById?.product[0].price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
