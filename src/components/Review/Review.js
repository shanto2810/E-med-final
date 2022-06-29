import React, { useEffect, useState } from 'react';
import {getStoredCart} from '../../utilities/fakedb'
import fakeData from '../../fakeData/products.json';
import Reviewitem from '../ReviewItem/Reviewitem';
import {deleteFromDb,clearTheCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header/Header';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
const Review = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
    const [cart,setcart]=useState([]);
    const [orderPlaced,setorderPlaced]=useState(false);
    const history=useHistory()
    const removeProduct=(productkey)=>{
        console.log(productkey);
        const newCart=cart.filter(pd=>pd.key!==productkey)
        setcart(newCart);
        deleteFromDb(productkey);
    }
    const handleProceedCheckout=()=>{
       history.push('/Shipment');
    }
    useEffect(()=>
    {
        const savedCart=getStoredCart();
        //console.log(savedCart);
        const productKeys=Object.keys(savedCart);
        const cartproduct=productKeys.map(key=>{
            const product=fakeData.find(pd=>pd.key===key);
            product.quantity=savedCart[key];
            return product;
        });
        setcart(cartproduct);
    },[])
    let thankyou;
    if(orderPlaced){
        thankyou=<img src={happyImage} alt=''></img>
}
    return (
        <div>
            <Header></Header>
        <div className='twin-container'>
        <div className='product-container'>
            <h1>Items in Cart:{cart.length}</h1>
            {
               
                cart.map(pd => <Reviewitem removeProduct={removeProduct} key={pd.key} product={pd}></Reviewitem>)
            }
            {
                thankyou
            }
        </div>
        <div>
            <Cart cart={cart}>
                <button className="b5" variant="outlined" onClick={handleClickOpen}>
        Confirm Order !!
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           E-MEDICINE
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            "Confirmation of the order Done      !!!          
            Your Product will be delivered soon   !!!! 
            Thanks for staying with us "
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
        </DialogActions>
      </Dialog>
            </Cart>
        </div>

        </div>
        </div>
    );
};

export default Review;