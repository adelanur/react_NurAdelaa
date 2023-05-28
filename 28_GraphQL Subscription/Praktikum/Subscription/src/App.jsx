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
import { Provider } from "react-redux";
import store, { persistedStore } from "./assets/config/store";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./assets/view/Login/login";
import Register from "./assets/view/Login/register";
import PrivateRoute from "./assets/PrivateRoot/PrivateRoute";
import { ApolloProvider } from "@apollo/client";
import client from "./assets/config/Apollo";

const App = () => {
  const [data, setData] = useState([]);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/CreateProduct"
                element={
                  <PrivateRoute>
                    <CreateProduct data={data} setData={setData} />
                  </PrivateRoute>
                }
              />
              <Route
                path="/DetailProduct/:id"
                element={<DetailProduct data={data} />}
              />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
