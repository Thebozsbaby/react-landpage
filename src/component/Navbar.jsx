import React from 'react'
import "../styles/navbar.css"

const Navbar = () => {
    const name = "bozsbaby"
    const job = "billionaire"
  return (
   <nav>
    <a href="">
        <img src="./assets/logo.png" alt=""/>
        <p>DvezsusB</p>
    </a>
    <ul>
        <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">About</a>
        </li>
        <li>
            <a href="">Project</a>
        </li>
        <li>
            <a href="">Testimonials</a>
        </li>
    </ul>
    <div className="btn-container">
        <button>Login</button>
        <button>Register</button>
    </div>
   </nav>
  )
}

export default Navbar