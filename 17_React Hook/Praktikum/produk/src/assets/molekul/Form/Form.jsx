import React from 'react'
import { useState } from 'react'
import Tabel from '../Tabel/Tabel';

const Form = () => {
  const [data, setData] = useState([]);
  const [form , setForm] = useState({nama:'', kategori:'', freshness:'', deskripsi:'', price:''});
    // const[name, setName] = useState('');
    // const[kategori, setKategori] = useState('');
    // const[freshness, setFreshness] = useState('');
    // const[deskripsi, setDeskripsi] = useState('');
    // const[price, setPrice] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();
      setData([...data, form]);
      setForm({nama:'', kategori:'', freshness:'', deskripsi:'', price:''});
      // const produk = {nama, kategori, freshness, deskripsi, price};
      // console.log(produk);
    
    }

    const handleChange = (event) =>{
      setForm({...form, [event.target.name]: event.target.value});
    };


  return (
    <div>
        <>
 
  <div >
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Product Name :</label>
        <input type="text" 
               name='nama'
                className='form-control'
                value={form.nama}
                onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="">Product Category :</label>
        <input type="text"
                name='kategori' 
                className='form-control'
               value={form.kategori}
               onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="">Product Freshness :</label>
        <input type="text" 
                name='freshness'
                className='form-control'
                value={form.freshness}
                onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="">Additional Description :</label>
        <input type="text"
              name='deskripsi'
           className='form-control'
          value={form.deskripsi}
          onChange={handleChange} />
        
      </div>
      <div className="form-group">
        <label htmlFor="">Product Price :</label>
        <input type="number"
                name='price'
                className='form-control'
                value={form.price}
                onChange={handleChange} />
      </div>
        <br />
      <div className="btn-group">
        <button type="submit" className="btn btn-primary"> Submit </button>
      </div>
    </form>

    <Tabel data={data}/>

  </div>
</>
    </div>
  )
}

export default Form
