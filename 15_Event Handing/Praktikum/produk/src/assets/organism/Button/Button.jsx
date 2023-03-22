import React from 'react'

function Button (){
 const handleClick = (e) =>{
    e.preventDefault();
    console.log(Math.floor(Math.random() * 100))
 }

  return (
    <div className='button'>
      <br />
        <button onClick={handleClick}>Submit</button>
      
    </div>
  )
}

export default Button
