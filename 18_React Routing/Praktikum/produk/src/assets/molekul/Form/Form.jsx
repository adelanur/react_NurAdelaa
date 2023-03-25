import React from 'react'
import { useState } from 'react'

const Form = () => {
    const[name, setName] = useState('');
    const[kategori, setKategori] = useState('');
    const[freshness, setFreshness] = useState('');
    const[deskripsi, setDeskripsi] = useState('');
    const[price, setPrice] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();
      const produk = {name, kategori, freshness, deskripsi, price};
      console.log(produk);
      // setName({name:""})
      // setKategori({kategori:""})
      // setFreshness({freshness:""})
      // setDeskripsi({deskripsi:""})
      // setPrice({price:""})
    }

  return (
    <div>
        <>
 
  <div >
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Product Name :</label>
        <input type="text" 
                className='form-control'
                value={name}
                autoComplete="off"
                placeholder='ketik disini'
                onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="">Product Category :</label>
        <input type="text" 
                className='form-control'
               value={kategori}
               onChange={(e) => setKategori(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="">Product Freshness :</label>
        <input type="text" 
                className='form-control'
                value={freshness}
                onChange={(e) => setFreshness(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="">Additional Description :</label>
        <input
           className='form-control'
          value={deskripsi}
               onChange={(e) => setDeskripsi(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Product Price :</label>
        <input type="number"
                className='form-control'
                value={price}
               onChange={(e) => setPrice(e.target.value)} />
      </div>
        <br />
      <div className="btn-group">
        <button type="submit" className="btn btn-primary"> Submit </button>
      </div>
    </form>
  </div>
</>
    </div>
  )
}

export default Form
