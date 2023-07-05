import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function NavBar() {
  const {logout,currentuser} = useContext(AuthContext)

  return (
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <Link class="navbar-brand mx-5 logo" to="/">Glowvo!</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
       
        {
          currentuser && currentuser.id?(
          <>
           <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/checkout">Checkout</Link>
        </li>
        {
          currentuser && currentuser.is_admin?
          <>
           <li class="nav-item">
          <Link class="nav-link" to="/addfood">Add Food</Link>
        </li>
          </>:" "
        }
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/profile">My Profile</Link></li>
            <li><a class="dropdown-item" onClick={()=>logout()}>Logout</a></li>
          </ul>
        </li>
          </>)
          : ""
        }
      
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar