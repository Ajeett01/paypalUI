import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import paypal from './paypal.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src={paypal} alt="PayPal Logo" className="logo" />
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Send & Request</a>
            </li>
            <li>
              <a href="#">Transactions</a>
            </li>
            <li>
              <a href="#">Wallet</a>
            </li>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Activity</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
          <span className='log'>LOG OUT</span>
        </div>
      </nav>
      <div className="search-container">
        <div className="search-box">
          <span className="search-icon">&#128269;</span>
          <input type="text" placeholder="Search by name or email" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
