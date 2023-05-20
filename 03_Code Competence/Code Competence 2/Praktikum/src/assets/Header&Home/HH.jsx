import React from "react";

const HH = () => {
  return (
    <div>
      <>
        {/* header */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img className="d-inline" src="/logoBuku.png" alt="" width={60} />
            <a className="navbar-brand" href="#">
              KUBUKU
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active text-success-emphasis"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Kategori
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Genre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <section className="hero">
            <div className="hero-text">
              <h1 className="intro-text">
                Baca <span>Buku</span> di <span className="span-2">sini</span>{" "}
                aja
              </h1>
              <p className="intro-text-sm">
                Dari membaca buku,
                <br />
                kamu akan belajar
                <br />
                banyak hal, yang bisa
                <br />
                membantu kamu dalam
                <br />
                kehidupan.
              </p>
              <button type="button" className="btn">
                Buy
              </button>
            </div>
            <img
              src="/CoffeeDoddle.png"
              alt="Coffee Doodle"
              className="img img-1"
            />
            <img
              src="/ReadingDoodle.png"
              alt="Reading Doodle"
              className="img img-2"
            />
          </section>
        </div>
      </>
    </div>
  );
};

export default HH;
