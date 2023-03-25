import { useEffect, useState } from 'react'
import './App.css'
import Form from './assets/molekul/Form/Form'
import Header from './assets/molekul/Header/Header'
// import Button from './assets/organism/Button/Button'
import article from './Artikel'
import Tabel from './assets/molekul/Tabel/Tabel'
import Navbar from './assets/organism/Navbar/Navbar'

const App = () => {
    
  // useEffect(()=> {
  //     alert ("WELCOME")
  //   },[]);

  return (


    <div className="App">
    <Navbar/>
    <Header/>
    <Form/> 
    {/* <Button/> */}
    <Tabel/> 
    
    </div>
  )
}

export default App
