import React from 'react'
import { useState } from 'react'

const Tabel = ({data}) => {
  return (
    <div>
       {/* Membuat Tabel  */}
  <div style={{ padding: 20 }}>
    <hr />
    <h2 style={{ textAlign: "center" }}>List Product</h2>

    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Additional Description</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody >
          {data.map((item, index) =>(
            <tr key={index}>
              <td>{item.nama} </td>
              <td>{item.kategori} </td>
              <td>{item.freshness} </td>
              <td>{item.deskripsi} </td>
              <td>{item.price} </td>

            </tr>
          ))}

        </tbody>
      </table>
    </div>
  </div>
    </div>
  )
}

export default Tabel
