import React from 'react'
import "../styles/footer.css"
import { FaInstagram, FaWhatsapp, FaFacebookF, FaTwitter , FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-container">
                <h1>DvezsusB.</h1>
                <p>400 University Drive Suite 200 Coral Gables,<br></br> FL 33134 USA</p>
                <div className='links'>
                    <a href="" className='ig'><FaInstagram /></a>
                    <a href="" className='whats'><FaWhatsapp /></a>
                    <a href="" className='face'><FaFacebookF /></a>
                    <a href="" className='x'><FaTwitter /></a>
                    <a href=""><FaLinkedin /></a>
                </div>
            </div>
            <table>
                <th>
                    <td>links</td>
                    <td>help</td>
                </th>
                <tr>
                    <td>Home</td>
                    <td>Payment options</td>
                </tr>
                <tr>
                    <td>Shop</td>
                    <td>Returns </td>
                </tr>
                <tr>
                    <td>About</td>
                    <td>Privacy Poilicies</td>
                </tr>
                <tr>
                    <td>contacts</td>
                </tr>
            </table>
            <div className='table-right'>
                <h6>Newsletter</h6>
                <input type="text" placeholder='Enter Your Email Address'/>
                <button>suscribe</button>
            </div>
        </div>
        <hr />
        <h5>2024. &copy;Copyright of Thebozsbaby webdev.....</h5>
    </footer>
  )
}

export default Footer