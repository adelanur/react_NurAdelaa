import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const USER = gql`
  mutation MyMutation($email: String!, $password: String!) {
    insert_user_one(object: { email: $email, password: $password }) {
      email
      id
      password
    }
  }
`;

const Register = () => {
  const [user, { data: dataUser }] = useMutation(USER);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
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
      user({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      formik.resetForm();
      navigate("/login");
    },
  });
  return (
    <div className="container " style={{ backgroundColor: "GrayText" }}>
      <div className="login" style={{ padding: "200px 0 40px 30%" }}>
        <h3>HALAMAN REGISTER</h3> <br />
        <form className="form2" onSubmit={formik.handleSubmit}>
          <input
            className="form-control form-control-lg ms-1"
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
            className="form-control form-control-lg ms-1"
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
          <div className="mb-4 ms-5" style={{ color: "white" }}>
            Belum Punya Akun? <a href="/Register">Daftar Dulu</a>
            <button type="submit" className="btn btn-info w-75 mt-4">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
