import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../Header.css';
const Header = () => {
    return (
        <div className="header">
            {/* <img src="https://c8.alamy.com/comp/2BFKJB3/stethoscope-with-heart-and-cardiogram-2BFKJB3.jpg" alt=""></img>  */}
           <h1 className="head">E-MEDICINE</h1>
           <h3>The Best Online Pharmacy</h3>
           <nav class="nav">
           <Link to="/shop" style={{marginLeft:"300px"}}>HOME</Link>
           <Link to="/review">MY CART</Link>
           <Link to="/ConnectDoc">CON TO DOC</Link>
           <Link to="/Instructions">INSTRUCTIONS</Link>
           <Link to="/Inventory">ADMIN</Link>
           <input className='search1' type="text" name="search" placeholder="SEARCH" required/>

            </nav>
        </div>
    );
};

export default Header;