import React, {useContext, useRef, useState} from 'react';
import './Navbar.css';
import logo from "../assets/Ecommerce_Frontend_Assets/Assets/logo.png";
import cart_icon from "../assets/Ecommerce_Frontend_Assets/Assets/cart_icon.png";
import { Link } from "react-router-dom";
import dropdown_icon from "../assets/Ecommerce_Frontend_Assets/Assets/dropdown_icon.png";
import { ShopContext } from '../../context/shopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef(); 
    const dropdowntoggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }
    

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>Shopper</p>
        </div>
        <img className='nav-dropdown' onClick={dropdowntoggle} src={dropdown_icon} alt="" />
        <ul ref={menuRef} className='nav-menu '>
            <li onClick={()=>{setMenu("shop")}}> <Link className='link' to='/'>Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}> <Link className='link' to='/men'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link className='link' to='/women'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link className='link' to='/kid'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>

        <div className="nav-login-cart">
           <Link className='link' to='/login'> <button>Login</button></Link>

            <Link className='link' to='/cart'><img src={cart_icon}  alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar;
