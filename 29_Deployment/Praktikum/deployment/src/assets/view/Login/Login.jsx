import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import UserSlice from "../../config/UserSlice";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query MyQuery {
    user {
      email
      id
      password
    }
  }
`;

const Login = () => {
  const { data: dataUser } = useQuery(GET_USER);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.Users.Users);
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
      const cariUser = dataUser?.user.find(
        (user) => user.email === values.email
      );
      if (
        cariUser.email === values.email &&
        cariUser.password === values.password
      ) {
        dispatch(UserSlice.actions.setLogin(true));
        formik.resetForm();
        navigate("/CreateProduct");
      }
    },
  });
  return (
    <div className="container " style={{ backgroundColor: "GrayText" }}>
      <div className="login" style={{ padding: "200px 0 40px 30%" }}>
        <h3>HALAMAN LOGIN</h3> <br />
        <form className="form2" onSubmit={formik.handleSubmit}>
          <input
            className="form-control form-control-lg text-align-center"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
          />{" "}
          <br />
          {formik.errors.email && (
            <div className="error text-danger">{formik.errors.email}</div>
          )}{" "}
          <br />
          <input
            className="form-control form-control-lg"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <br />
          {formik.errors.password && (
            <div className="error text-danger">{formik.errors.password}</div>
          )}{" "}
          <div className="mb-5" style={{ color: "white" }}>
            Belum Punya Akun? <Link to={"/Register"}>Daftar Dulu</Link>
          </div>{" "}
          <br />
          <button type="submit" className="btn btn-info w-75 ms-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
