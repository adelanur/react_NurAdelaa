import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getData,
} from "../../config/ProdukThunk";

const Tabel = ({ produk, onDelete, formik, setIsEdit, dataProduct }) => {
  const dispatch = useDispatch();
  const productType = useSelector((state) => state.product.tipe);
  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (productType == createProduct.fulfilled.type) {
      dispatch(getData());
    }
    if (productType == deleteProduct.fulfilled.type) {
      dispatch(getData());
    }
    if (productType == editProduct.fulfilled.type) {
      dispatch(getData());
    }
  }, [productType]);

  // const products = [...produk];
  const products = useSelector((state) => state.product.products);

  const handleEdit = (item) => {
    formik.setValues({
      id: item.id,
      nama: item.nama,
      kategori: item.kategori,
      foto: item.foto,
      freshness: item.freshness,
      deskripsi: item.deskripsi,
      price: item.price,
    });
    setIsEdit(true);
  };
  return (
    <div>
      {/* Membuat Tabel  */}
      <div style={{ padding: 20 }}>
        <hr />
        <h2 style={{ textAlign: "center" }}>List Product</h2>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Image</th>
                <th>Product Freshness</th>
                <th>Additional Description</th>
                <th>Product Price</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataProduct?.product.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.nama}</td>
                    <td>{item.kategori}</td>
                    <td>{item.foto}</td>
                    <td>{item.freshness}</td>
                    <td>{item.deskripsi}</td>
                    <td>{item.price}</td>
                    <td>
                      <button onClick={() => onDelete(item.id)}>Delete</button>
                      <button onClick={() => handleEdit(item)}>Edit</button>
                      <Link to={`/DetailProduct/${item.id}`}>
                        <button>Detail</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
