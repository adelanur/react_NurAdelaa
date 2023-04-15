import React from "react";
import { Form, Header, Tabel } from "../../molekul";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import CreateProduct from "../CreateProduct/CreateProduct";
import { useSelector } from "react-redux";

const DetailProduct = ({ data }) => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  console.log(products);
  const filterProduct = [...products].filter((item) => item.id == id);

  return (
    <div>
      <div>ID : {filterProduct[0].id}</div>
      <div>NAMA PRODUCT :{filterProduct[0].nama}</div>
      <div>CATEGORY PRODUCT :{filterProduct[0].kategori}</div>
      <div>IMAGE :{filterProduct[0].foto}</div>
      <div>PRODUCT FRESHNESS :{filterProduct[0].freshness}</div>
      <div>DESKRIPSI :{filterProduct[0].deskripsi}</div>
      <div>PRICE :$ {filterProduct[0].price}</div>
    </div>
  );
};

export default DetailProduct;
