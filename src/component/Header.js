import React from 'react'
import {NavLink} from 'react-router-dom';
import { Nav,Navbar } from 'reactstrap';
import NavDropdown from "react-dropdown-select";


export default function Header() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/product">My Store</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <li className="nav-item">
      {/* <a className="nav-item nav-link active" href="#">Login</a> */}
      <NavLink activeStyle={{color:'red'}} className="nav-link" to="/login">LOGIN</NavLink>
      </li>
      <li className="nav-item">
      {/* <a className="nav-item nav-link" href="#">Register</a> */}
      <NavLink activeStyle={{color:'red'}} className="nav-link" to="/register">REGISTER</NavLink> 
      </li>
      <li className="nav-item">
      {/* <a className="nav-item nav-link" href="#">Register</a> */}
      <NavLink activeStyle={{color:'red'}} className="nav-link" to="/profile">PROFILE</NavLink> 
      </li>
    </div>
  </div>
</nav>
        </div>

    )
}
