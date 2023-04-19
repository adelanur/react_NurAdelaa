import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import UserSlice from "../../config/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Users.Users);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("input valid email")
        .required("email harus diisi"),

      password: Yup.string().min(8, "password min 8 karakter ").required(),
    }),

    onSubmit: (values) => {
      const cariUser = [...users].find((user) => user.email === values.email);
      if (
        cariUser.email === values.email &&
        cariUser.password === values.password
      ) {
        dispatch(UserSlice.actions.setLogin(true));
        formik.resetForm();
        navigate("/");
      }
    },
  });
  return (
    <div>
      <div>halaman login</div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />{" "}
        <br />
        {formik.errors.email && (
          <div className="error text-danger">{formik.errors.email}</div>
        )}{" "}
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <br />
        {formik.errors.password && (
          <div className="error text-danger">{formik.errors.password}</div>
        )}{" "}
        <br />
        <div style={{ color: "white" }}>
          Belum Punya Akun? <a href="/Register">Daftar Dulu</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
