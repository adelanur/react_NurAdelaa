import React from 'react'

const Tabel = () => {
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
        <tbody id="datatable"></tbody>
      </table>
    </div>
  </div>
    </div>
  )
}

export default Tabel
