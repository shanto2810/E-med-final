import React from 'react';
import './Cart.css'
const Cart = (prop) => {
    const cart = prop.cart;
    const total = cart.reduce((total, prd) => total + prd.price*prd.quantity, 0);
    let shipping = 0;
    const formatNumber = num => {
        const pricision = num.toFixed(2);
        return Number(pricision);
    }
    if (total > 35) {
        shipping = 50.00;
    } else if (total > 0) {
        shipping = 50.00;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping ).toFixed(2);
    return (
       <div>
           <h4 className='text-primary'>Orders:</h4>
           <p>Items Ordered : {cart.length}</p>
           <p>Product Price : {formatNumber(total)}</p>
           <p>shipping Cost : {shipping}</p>
           {/* <p><small>Tax + VAT: {tax}</small></p> */}
           <p>Total Price : {grandTotal}</p>
           {
               prop.children
           }
       </div>
    );
};

export default Cart;