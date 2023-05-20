import { useState } from "react";
import HH from "./assets/Header&Home/HH.JSX";
import AboutUs from "./assets/AboutUS/AboutUs";
import FC from "./assets/Footer&ContactUs/FC";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <HH></HH>
        <AboutUs></AboutUs>
        <FC></FC>
      </div>
    </>
  );
}

export default App;
