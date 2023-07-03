import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <Link class="navbar-brand mx-5 logo" to="/">Glowvo!</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/checkout">Checkout</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/addrestaurant">Add Restaurant</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/addfood">Add Food</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className='me-1' width="24" height="24" src="https://img.icons8.com/office/16/user-female-circle.png" alt="user-female-circle"/>
            Profile
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/profile">My Profile</Link></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar