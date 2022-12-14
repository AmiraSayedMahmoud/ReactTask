import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector}from 'react-redux'
import { countContext } from '../Config/CountContext'


export default function Navbar() {
  let x=localStorage.getItem("token")

  // const {count,setCount}=useContext(countContext);
  // const counter=useSelector(state=>state.count)
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="./">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
       {x&& <li className="nav-item">
          <NavLink className="nav-link" to='/product'> Product </NavLink>
        </li>}
       {x&&<li className="nav-item">
          <NavLink className="nav-link" to='/profile'> Profile </NavLink>
        </li>}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/count">count</NavLink>
          </li> */}
        {/* <li className="nav-item">
          <span  style={{color:"black",fontSize:30}}>{counter}</span></li> */}
      </ul>
    </div>
  </div>
</nav>
  )
}
