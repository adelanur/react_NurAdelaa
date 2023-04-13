import { useEffect, useState } from "react";
import "./App.css";
import Form from "./assets/molekul/Form/Form";
import Header from "./assets/molekul/Header/Header";
import CreateProduct from "./assets/view/CreateProduct/CreateProduct";
import article from "./Artikel";
import Tabel from "./assets/molekul/Tabel/Tabel";
import Navbar from "./assets/organism/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/view/Landing Page/LandingPage";
import DetailProduct from "./assets/view/DetailProduct/DetailProduct";

const App = () => {
  const [data, setData] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/CreateProduct"
          element={<CreateProduct data={data} setData={setData} />}
        />
        <Route
          path="/DetailProduct/:id"
          element={<DetailProduct data={data} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
