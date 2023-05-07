import { useEffect, useState } from "react";
import "./CreateProduct.css";
import { v4 as uuidv4 } from "uuid";
import { Form, Header, Tabel } from "../../molekul";
import article from "../../../Artikel";
import Navbar from "../../organism/Navbar/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateProduct = ({ data, setData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: "",
      nama: "",
      kategori: "choose",
      foto: "",
      freshness: false,
      deskripsi: "",
      price: "",
    },

    validationSchema: Yup.object({
      nama: Yup.string()
        .matches(/^[a-zA-Z ]+$/, "tidak boleh mengandung simbol")
        .max(50, "product name tidak boleh melebihi 50 karakter")
        .required("produk harus diisi"),

      kategori: Yup.string()
        .oneOf(["pilih1", "pilih2", "pilih3"], "Harap klik salah satu")
        .required(),

      foto: Yup.string().required("foto harus diisi"),

      freshness: Yup.string()
        .oneOf(
          ["Brand New", "Second Hand", "Refurbished"],
          "Harap klik salah satu"
        )
        .required(),

      deskripsi: Yup.string()
        .max(200, "deskripsi tidak boleh melebihi 200 karakter")
        .required("deskripsi harus diisi"),

      price: Yup.number().required("harus berisi angka"),
    }),

    onSubmit: (values) => {
      const updatedProduct = [
        ...data,
        {
          id: uuidv4(),
          nama: values.nama,
          kategori: values.kategori,
          foto: values.foto,
          freshness: values.freshness,
          deskripsi: values.deskripsi,
          price: values.price,
        },
      ];
      setData(updatedProduct);
      formik.resetForm();
    },
  });

  const handleDelete = (id) => {
    const konfirmasiDelete = window.confirm("Apakah yakin hapus?");
    if (konfirmasiDelete == true) {
      const newData = [...data].filter((item) => item.id != id);
      setData(newData);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Form
        data={data}
        setData={setData}
        isEdit={isEdit}
        formik={formik}
        setIsEdit={setIsEdit}
      />

      <Tabel
        produk={data}
        onDelete={handleDelete}
        formik={formik}
        setIsEdit={setIsEdit}
      />
    </div>
  );
};

export default CreateProduct;
