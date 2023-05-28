import React from "react";
import "./LandingPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserSlice from "../../config/UserSlice";
import ListProduct from "./ListProduct";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.Users.isLogin);
  const handleLogOut = () => {
    dispatch(UserSlice.actions.setLogin(false));
    navigate("/");
  };
  return (
    <div>
      <>
        <header>
          <h1 className="logo">Simple Header</h1>
          <ul>
            <li>
              <a href="/" className=" nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Feature
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                FAQs
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li>
              {isLogin == true ? (
                <button
                  type="button"
                  onClick={handleLogOut}
                  className="nav-link"
                >
                  LogOut
                </button>
              ) : (
                <Link to={"/Login"}>Login</Link>
              )}
            </li>
          </ul>
        </header>
        <section id="banner-section">
          <div className="container">
            <div className="banner-desc">
              <h1>
                better solution for your
                <br />
                business
              </h1>
              <p>
                we are team of talented designer making website with
                <br />
                Bootstrap
              </p>
            </div>
            <div className="banner-img">
              <img src="hero-img.png.png" alt="" />
            </div>
            <div className="banner-button">
              <button
                onClick={() => navigate("/CreateProduct")}
                className="btn primary-button"
              >
                <Link to={"/CreateProduct"}>Get Started</Link>
              </button>
              <button className="btn banner-button">
                <a href="">Watch Video</a>
              </button>
            </div>
          </div>
        </section>
        <section id="join-section">
          <div className="container">
            <div className="join">
              <h1>Join Our Newsletter</h1>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form className="form1">
                <input
                  type="text"
                  className="d-inline border border-black p-2 me-4 ms-5 "
                  style={{
                    backgroundColor: "white",
                    width: 400,
                    height: 40,
                  }}
                />

                <button
                  className="btn primary-button submit-input d-inline mb-4 p-2"
                  style={{ width: 150, height: 40 }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
        <section>
          <ListProduct></ListProduct>
        </section>
        <section id="profile-section">
          <div className="container">
            <div className="profile profile-company">
              <h5 className="company-name">ARSHA</h5>
              <div className="address">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p>United States</p>
              </div>
              <br />
              <br />
              <p className="phone-num">Phone: +1 5589 55488 55</p>
              <p className="phone-num">Email: NurAdela@gmail.com</p>
            </div>
            <div className="profile profile-company">
              <h5 className="company-links">Useful Links</h5>
              <div className="Links">
                <p id="About">Home</p>
                <p id="About">About us</p>
                <p id="About">Service</p>
                <p id="About">Terms of Service</p>
                <p id="About">Privacy policy</p>
              </div>
            </div>
            <div className="profile profile-company">
              <h5 className="company-links">Our Services</h5>
              <div className="Links">
                <p id="web">Web Design</p>
                <p id="web">Web Development</p>
                <p id="web">Product Management</p>
                <p id="web">Marketing</p>
                <p id="web">Graphic Design</p>
              </div>
            </div>
            <div className="profile profile-company1">
              <h5 className="company-links">Our Social Networks</h5>
              <div className="Links">
                <p id="des1">
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna
                </p>
                <p id="des2">derita valies</p>
              </div>
              <div className="ling">
                <div id="lingkaran" />
                <div id="lingkaran1" />
                <div id="lingkaran1" />
                <div id="lingkaran1" />
                <div id="lingkaran1" />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <p>
              {" "}
              © Copyrights <span>Arsha</span>. All Rights Reserved
            </p>
            <p>
              {" "}
              Designed By{" "}
              <a id="bot" href="#">
                Nur Adela
              </a>
            </p>
          </div>
        </footer>
      </>
    </div>
  );
};

export default LandingPage;
