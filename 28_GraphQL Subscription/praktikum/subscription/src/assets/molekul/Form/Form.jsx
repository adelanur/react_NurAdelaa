import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tabel from "../Tabel/Tabel";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import ProductSlice from "../../config/ProductSlice";
import { editProduct } from "../../config/ProdukThunk";

const Form = ({ formik, setIsEdit, isEdit, data, setData }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  const handleUpdate = (newProduct, e) => {
    e.preventDefault();

    // const updatedProduct = [...product].map((product) => {
    //   if (product.id == newProduct.id) {
    //     return {
    //       id: newProduct.id,
    //       nama: newProduct.nama,
    //       kategori: newProduct.kategori,
    //       foto: newProduct.foto,
    //       freshness: newProduct.freshness,
    //       deskripsi: newProduct.deskripsi,
    //       price: newProduct.price,
    //     };
    //   }
    //   return product;
    // });
    // dispatch(ProductSlice.actions.productUpdate(updatedProduct));
    const updatedProduct = {
      id: newProduct.id,
      nama: newProduct.nama,
      kategori: newProduct.kategori,
      foto: newProduct.foto,
      freshness: newProduct.freshness,
      deskripsi: newProduct.deskripsi,
      price: newProduct.price,
    };
    dispatch(editProduct(updatedProduct));
    // setData(updatedProduct);

    setIsEdit(false);

    formik.resetForm();
  };

  return (
    <div>
      <>
        <div className="form2">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Product Name :</label>
              <input
                type="text"
                name="nama"
                className="form-control"
                value={formik.values.nama}
                onChange={formik.handleChange}
                data-testid="productName"
              />
              {formik.errors.nama && (
                <div className="error text-danger">{formik.errors.nama}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Product Category :</label>
              <select
                name="kategori"
                id="kategori"
                className="form-control"
                value={formik.values.kategori}
                onChange={formik.handleChange}
              >
                <option value="choose" disabled>
                  {" "}
                  choose
                </option>
                <option value="pilih1">pilih1</option>
                <option value="pilih2">pilih2</option>
                <option value="pilih3">pilih3</option>
              </select>
              {formik.errors.kategori && (
                <div className="error text-danger">
                  {formik.errors.kategori}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="imageofproduct" className="form-label">
                {/* {" "} */}
                <br />
                Image of Product :
              </label>
              <div className="form-group ms-4">
                <input
                  className="form-control btn btn-primary "
                  type="file"
                  id="imagefile"
                  // required
                  name="foto"
                  onChange={formik.handleChange}
                />
                {formik.errors.foto && formik.touched.foto && (
                  <div className="error text-danger">{formik.errors.foto}</div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="">Product Freshness :</label>
              <div id="form-check has-validation">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="freshness"
                    id="freshness"
                    defaultValue="Brand New"
                    onChange={formik.handleChange}
                    checked={formik.values.freshness == "Brand New"}
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
                    onChange={formik.handleChange}
                    checked={formik.values.freshness == "Second Hand"}
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
                    onChange={formik.handleChange}
                    checked={formik.values.freshness == "Refurbished"}
                  />
                  <label className="form-check-label" htmlFor="Refurbished">
                    Refurbished
                  </label>
                </div>
              </div>
              {formik.errors.freshness && (
                <div className="error text-danger">
                  {formik.errors.freshness}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Additional Description :</label>
              <textarea
                name="deskripsi"
                className="form-control"
                value={formik.values.deskripsi}
                onChange={formik.handleChange}
              />
              {formik.errors.deskripsi && (
                <div className="error text-danger">
                  {formik.errors.deskripsi}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Product Price :</label>
              <input
                type="number"
                name="price"
                className="form-control"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
              {formik.errors.price && (
                <div className="error text-danger">{formik.errors.price}</div>
              )}
            </div>
            <br />
            <div className="btn-group">
              <button
                data-testid="submitbutton"
                type="submit"
                className="btn btn-primary"
              >
                {isEdit == true ? "update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Form;
