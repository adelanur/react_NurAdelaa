import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tabel from "../Tabel/Tabel";

const Form = ({
  data,
  setData,
  nama,
  setNama,
  kategori,
  setKategori,
  foto,
  setFoto,
  freshness,
  setFreshness,
  deskripsi,
  setDeskripsi,
  price,
  setPrice,
  isEdit,
  handleUpdate,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = [
      ...data,
      { id: uuidv4(), nama, kategori, foto, freshness, deskripsi, price },
    ];
    setData(updatedProduct);
    setNama("");
    setKategori("choose");
    setFoto("");
    setFreshness("");
    setDeskripsi("");
    setPrice("");
  };

  const handleNama = (event) => {
    setNama(event.target.value);
  };

  const handleKategori = (event) => {
    setKategori(event.target.value);
  };

  const handleFoto = (event) => {
    setFoto(event.target.value);
  };
  const handleFreshness = (event) => {
    setFreshness(event.target.value);
  };
  const handleDeskripsi = (event) => {
    setDeskripsi(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <>
        <div>
          <form onSubmit={isEdit == true ? handleUpdate : handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Product Name :</label>
              <input
                type="text"
                name="nama"
                className="form-control"
                value={nama}
                onChange={handleNama}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Product Category :</label>
              <select
                name="kategori"
                id="kategori"
                className="form-control"
                value={kategori}
                onChange={handleKategori}
              >
                <option value="choose" disabled>
                  {" "}
                  choose
                </option>
                <option value="pilih1">pilih1</option>
                <option value="pilih2">pilih2</option>
                <option value="pilih3">pilih3</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="imageofproduct" className="form-label">
                {" "}
                <br />
                Image of Product :
              </label>
              <div className="foto">
                <input
                  className="form-control btn btn-primary "
                  type="file"
                  id="imagefile"
                  required
                  // value={foto}
                  onChange={handleFoto}
                />
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
                    onChange={handleFreshness}
                    checked={freshness == "Brand New"}
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
                    onChange={handleFreshness}
                    checked={freshness == "Second Hand"}
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
                    onChange={handleFreshness}
                    checked={freshness == "Refurbished"}
                  />
                  <label className="form-check-label" htmlFor="Refurbished">
                    Refurbished
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Additional Description :</label>
              <input
                type="text"
                name="deskripsi"
                className="form-control"
                value={deskripsi}
                onChange={handleDeskripsi}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Product Price :</label>
              <input
                type="number"
                name="price"
                className="form-control"
                value={price}
                onChange={handlePrice}
              />
            </div>
            <br />
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
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
