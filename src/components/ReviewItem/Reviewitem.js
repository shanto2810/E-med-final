import React from 'react';
import './ReviewItem.css';

const Reviewitem = (props) => {
    const {img,name,quantity,key,price}=props.product;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        // marginBottom:'5px',
        // paddingBottom:'5px',
        // marginLeft:'200px'
    }
    return (
        <div className="r-align">
        <div>
        <img className="img-size2" src={img} alt="" />
    </div>
        <div style={reviewItemStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quanity:{quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button onClick={()=>props.removeProduct(key)} className='main-button xxx'>Remove</button>

        </div>
        </div>
    );
};

export default Reviewitem;