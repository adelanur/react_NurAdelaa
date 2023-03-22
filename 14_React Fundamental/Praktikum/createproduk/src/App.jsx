import { useState } from 'react'
import './App.css'
import Header from './assets/Component/Molekul/Header/Header'
import Form from './assets/Component/Molekul/Form/Form'
import Tabel from './assets/Component/Molekul/Tabel/Tabel'
import Navbar from './assets/Component/Organism/Navbar'


function App(){
  const handleNumber = (e) => {
    e.preventDefault();
    console.log(Math.floor(Math.random() * 100));
  };

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Form/>
      <Tabel number={handleNumber}/>
      
      
    
    </div>
  )
}

export default App
