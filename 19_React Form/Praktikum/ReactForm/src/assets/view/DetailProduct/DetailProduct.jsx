import React from "react";
import { Form, Header, Tabel } from "../../molekul";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import CreateProduct from "../CreateProduct/CreateProduct";
import "./DetailProduct.css";

const DetailProduct = ({ data }) => {
  const { id } = useParams();

  const filterProduct = [...data].filter((item) => item.id == id);

  return (
    <div className="detail-data">
      <h1 className="title">Detail Product</h1>
      <div className="detail-id">
        <span>ID</span> : {filterProduct[0].id}
      </div>
      <div className="detail-nama">
        <span>NAMA PRODUCT</span> : {filterProduct[0].nama}
      </div>
      <div className="detail-kategori">
        <span>CATEGORY PRODUCT</span> : {filterProduct[0].kategori}
      </div>
      <div className="detail-image">
        <span>IMAGE</span> : {filterProduct[0].foto}
      </div>
      <div className="detail-frshness">
        <span>PRODUCT FRESHNESS</span> : {filterProduct[0].freshness}
      </div>
      <div className="detail-deskripsi">
        <span>DESKRIPSI</span> : {filterProduct[0].deskripsi}
      </div>
      <div className="detail-price">
        <span>PRICE</span> : ${filterProduct[0].price}
      </div>
    </div>
  );
};

export default DetailProduct;
