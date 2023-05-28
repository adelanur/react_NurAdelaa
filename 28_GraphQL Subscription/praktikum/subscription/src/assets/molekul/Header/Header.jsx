import React, { useEffect, useState } from 'react'
import article from '../../../Artikel'

const Header = () => {
  const [language,setLanguage]=useState("english")
  const [content,setContent]=useState({})

  useEffect(()=>{
    if(language=="english"){
      setContent(article.english)
    }else if(language=="indonesia"){
      setContent(article.indonesia)
    }
  })

  return (
    <div>
<div className="container">

    <a className="navbar-logo" href="#">
      <img className="logo" src="bootstrap-logo.svg.svg" alt="Bootstrap" />
    </a>
    <div>
      <div className='bhs'>
      <select value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
          <option>english</option>
          <option>indonesia</option>
      </select>
      </div>
        
     
      <h3>{content.Title}</h3>
      <h3>{content.description}</h3>
     
      </div>

    <h2>Create Product</h2>

  </div>
    </div>
    
  )
}

export default Header
