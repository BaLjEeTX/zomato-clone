import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/store-context';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const {totalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to="/"><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <Link to="/">home</Link>
        </li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          <Link to="/menu">menu</Link>
        </li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          <Link to="/mobile-app">mobile-app</Link>
        </li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          <Link to="/contact-us">contact us</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/Cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={totalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;