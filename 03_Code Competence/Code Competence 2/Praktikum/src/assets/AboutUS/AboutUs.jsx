import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-light">
        <div className="container ">
          <div className="row h-100 align-items-center py-1">
            <div className="col-lg-6 ">
              <img
                src="/aboutUS4.png"
                alt=""
                style={{ width: "65%", height: "50%" }}
                className="img-fluid "
              />
            </div>
            <div className="col-lg-6 d-none d-lg-block  ">
              <h1
                className="display-4 mt-3 rounded-2 p-2 shadow"
                style={{ backgroundColor: "#cdb4db" }}
              >
                About us{" "}
              </h1>
              <h3 className="lead text-muted mb-4">
                Buku merupakan sumber inspirasi yang tak terbatas, yang dapat
                membawa perubahan, membuka pikiran, dan memberikan kekuatan
                kepada pembacanya. Maka dari itu "Mari Menjelajah Buku Bersama
                KUBUKU"{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="aboutUs">
        <div className="d-inline ms-5" style={{ height: "50px" }}>
          <img
            src="/ABOUTus3.png"
            alt=""
            style={{ width: "30%", height: "10%" }}
            className="img-fluid"
          />
          <div className="d-inline ">
          <p className="text-end ">About Us</p>
          <p className="col-lg-3 offset-lg-7 col-md-6 col-sm-6 ">
            Buku adalah sumber inspirasi yang tak terbatas, yang dapat membawa
            perubahan, membuka pikiran, dan memberikan kekuatan kepada
            pembacanya.{" "}
          </p>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default AboutUs;
