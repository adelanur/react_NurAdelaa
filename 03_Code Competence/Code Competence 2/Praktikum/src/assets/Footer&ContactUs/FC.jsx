import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Enter First Name!"),
      lastName: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Enter Last Name!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Enter Email!"),
      message: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(100, "Maximum 100 characters")
        .required("Type Message!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <footer className="footer">
        <div>
          <div className="container p-2">
            <div className="row">
              <div className="col-lg-3 col-md-2 col-sm-6">
                <div className="footer-about">
                  <a href="#">
                    <img
                      className="d-inline"
                      src="/logoBuku.png"
                      alt=""
                      width={100}
                    />
                  </a>
                  <h4 className="d-inline">K U B U K U</h4>
                  <p>
                    Semarang, Jawa Tengah
                    <span>
                      {" "}
                      <b>phone</b> : +62 0950 2321 651
                    </span>
                    <span>
                      {" "}
                      <b>email</b> : kubuku@.gmail.com
                    </span>
                  </p>
                  <div className="p-2">
                    <a href="#">
                      <img
                        className="d-inline"
                        src="/instagram.svg"
                        alt=""
                        width={40}
                      />
                    </a>
                    <a href="#">
                      <img
                        className="d-inline mx-2"
                        src="/facebook.svg"
                        alt=""
                        width={40}
                      />
                    </a>
                    <a href="#">
                      <img
                        className="d-inline"
                        src="/twitter.svg"
                        alt=""
                        width={40}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                <div className="footer-widget">
                  <h6>KATEGORI</h6>
                  <ul>
                    <li>
                      <a href="#">Baca</a>
                    </li>
                    <li>
                      <a href="#">Beli</a>
                    </li>
                    <li>
                      <a href="#">Trending</a>
                    </li>
                    <li>
                      <a href="#">Sale</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer-widget">
                  <h6>Genre</h6>
                  <ul>
                    <li>
                      <a href="#">Fiksi</a>
                    </li>
                    <li>
                      <a href="#">Non Fiksi</a>
                    </li>
                    <li>
                      <a href="#">Fantasi</a>
                    </li>
                    <li>
                      <a href="#">Sains</a>
                    </li>
                    <li>
                      <a href="#">Thriller</a>
                    </li>
                    <li>
                      <a href="#">Romance</a>
                    </li>
                    <li>
                      <a href="#">Sejarah</a>
                    </li>
                    <li>
                      <a href="#">Petualangan</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h6>CONTACT US</h6>
                  <div className="footer-newslatter">
                    <p>
                      Hubungi kami jika anda mengalami kesulitan. Masukkan data
                      diri anda dibawah ini
                    </p>
                    <form onSubmit={formik.handleSubmit}>
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.firstName &&
                          formik.touched.firstName && (
                            <div className="error text-danger">
                              {formik.errors.firstName}
                            </div>
                          )}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.lastName && formik.touched.lastName && (
                          <div className="error text-danger">
                            {formik.errors.lastName}
                          </div>
                        )}
                      </div>
                      <div>
                        {" "}
                        <input
                          type="text"
                          name="email"
                          placeholder="Your Email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <div className="error text-danger">
                            {formik.errors.email}
                          </div>
                        )}
                      </div>
                      <div>
                        {" "}
                        <input
                          type="text"
                          name="message"
                          placeholder="Message"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.message && formik.touched.message && (
                          <div className="error text-danger">
                            {formik.errors.message}
                          </div>
                        )}
                      </div>
                      <div className="rounded-5">
                        <button type="submit">SUBMIT</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="footer-copyright-text">
                  <p>
                    Copyright © 2021 All rights reserved | This template is made
                    with <i className="fa fa-heart-o" arial-hidden="true" /> by
                    <a href="#">NurAdela</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FC;
