import React from 'react'


const Form = () => {
  return (
    <div>
        <>
 
  <div className="wrapper">
    <form action="" method="post">
      <div className="form-group">
        <label htmlFor="">Product Name :</label>
        <input type="text" 
                name="produk"
                required/>
      </div>
      <div className="form-group">
        <label htmlFor="">Product Category :</label>
        <input type="text" 
               name="kategori"
               required />
      </div>
      <div className="form-group">
        <label htmlFor="">Product Freshness :</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Additional Description :</label>
        <textarea
          name=""
          id=""
          rows={5}
          placeholder="deskription here..."
          defaultValue={""}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Product Price :</label>
        <input type="number" />
      </div>
      {/* <div className="form-group">
        <br />
        <button type="submit" className="Submit">
          Submit
        </button>
      </div> */}
    </form>
  </div>
</>
    </div>
  )
}

export default Form
