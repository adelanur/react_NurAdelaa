import { useEffect, useState } from "react";
import "./CreateProduct.css";
import { v4 as uuidv4 } from "uuid";
import { Form, Header, Tabel } from "../../molekul";
import article from "../../../Artikel";
import Navbar from "../../organism/Navbar/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import ProductSlice from "../../config/ProductSlice";
import { createProduct, deleteProduct } from "../../config/ProdukThunk";
import { gql, useMutation, useQuery } from "@apollo/client";

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

const INSERT_PRODUCT = gql`
  mutation insertProduct(
    $price: Int!
    $nama: String!
    $kategori: String!
    $freshness: String!
    $foto: String!
    $deskripsi: String!
  ) {
    insert_product_one(
      object: {
        deskripsi: $deskripsi
        foto: $foto
        freshness: $freshness
        kategori: $kategori
        nama: $nama
        price: $price
      }
    ) {
      id
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation delateProduct($id: uuid!) {
    delete_product_by_pk(id: $id) {
      deskripsi
      foto
      freshness
      kategori
      nama
      price
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: uuid!
    $deskripsi: String!
    $foto: String!
    $freshness: String!
    $nama: String!
    $kategori: String!
    $price: Int!
  ) {
    update_product_by_pk(
      pk_columns: { id: $id }
      _set: {
        deskripsi: $deskripsi
        foto: $foto
        freshness: $freshness
        price: $price
        nama: $nama
        kategori: $kategori
      }
    ) {
      deskripsi
      foto
      freshness
      kategori
      nama
      price
    }
  }
`;

const CreateProduct = ({ data, setData }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const {
    loading: loadingGetProduct,
    data: dataGetProduct,
    error: errorGetProduct,
  } = useQuery(GET_PRODUCT);

  const [
    insertProduct,
    {
      loading: loadingInsertProduct,
      data: dataInsertProduct,
      error: errorInsertProduct,
    },
  ] = useMutation(INSERT_PRODUCT);

  const [
    deleteProduct,
    {
      loading: loadingdeleteProduct,
      data: datadeleteProduct,
      error: errordeleteProduct,
    },
  ] = useMutation(DELETE_PRODUCT);

  const [
    updateProduct,
    {
      loading: loadingUpdateProduct,
      data: dataUpdateProduct,
      error: errorUpdateProduct,
    },
  ] = useMutation(UPDATE_PRODUCT);

  const product = useSelector((state) => state.product.products);
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
        .max(25, "product name tidak boleh melebihi 25 karakter")
        .required("produk harus diisi"),

      kategori: Yup.string()
        .oneOf(["pilih1", "pilih2", "pilih3"], "Harap pilih")
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
      if (isEdit == true) {
        updateProduct({
          variables: {
            id: values.id,
            nama: values.nama,
            kategori: values.kategori,
            foto: values.foto,
            freshness: values.freshness,
            deskripsi: values.deskripsi,
            price: values.price,
          },
        });
        setIsEdit(false);
        formik.resetForm();
      } else {
        insertProduct({
          variables: {
            nama: values.nama,
            kategori: values.kategori,
            foto: values.foto,
            freshness: values.freshness,
            deskripsi: values.deskripsi,
            price: values.price,
          },
        });

        formik.resetForm();
      }
    },
  });

  const handleDelete = (id) => {
    const konfirmasiDelete = window.confirm("Apakah yakin hapus?");
    if (konfirmasiDelete == true) {
      deleteProduct({
        variables: { id },
      });
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
      {/* <Button/> */}
      <Tabel
        produk={data}
        onDelete={handleDelete}
        formik={formik}
        setIsEdit={setIsEdit}
        dataProduct={dataGetProduct}
      />
    </div>
  );
};

export default CreateProduct;
