import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Tabel = ({ produk, onDelete, formik, setIsEdit }) => {
  // const products = [...produk];
  const products = useSelector((state) => state.product.products);
  console.log(products);
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
              {products.map((item, index) => {
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
