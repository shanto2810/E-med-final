import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {img,name,seller,price,stock,key}=props.product;
   
    return (
        <div className='product'>
            <div>
                <img className="img-size" src={img} alt="" />
            </div>
            <div>
                <div className="product-name">Product : <Link to={"/Product/"+key}>{name}</Link> </div>
                <br />
                <p>Seller/Company: {seller}</p>
                <p>Price: {price} Taka</p>
                {/* <p><small>Only {stock}left in stock-Order soon</small></p> */}
                {props.addtocart && <button className='main-button'
                onClick={()=>props.handleADDProduct(props.product)}>
                     <FontAwesomeIcon icon={faShoppingCart}/>
                Add To Cart</button>}
            </div>
             
        </div>
    );
};

export default Product;