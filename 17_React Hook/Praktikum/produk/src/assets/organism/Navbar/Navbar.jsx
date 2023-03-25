import React from 'react'

const Navbar = () => {
  return (
    <div>
       <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
    crossOrigin="anonymous"
  />
  {/* <link rel="stylesheet" href="style.css" /> */}
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Simple Header
    </a>
    <ul className="nav justify-content-end nav-pills">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Features
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Pricing
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">FAQs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">About</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
