import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../Header.css';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
const Header = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="header">
            {/* <img src="https://c8.alamy.com/comp/2BFKJB3/stethoscope-with-heart-and-cardiogram-2BFKJB3.jpg" alt=""></img>  */}
            <button className="hb" variant="outlined" onClick={handleClickOpen}>
        Contact Us
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           E-MEDICINE
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <h4>Admin-1 :Naimul Islam Shanto</h4>
            <h5>Email   : xxx....@gmail.com </h5>
            <h5>Cellphone: 015********</h5>
            <h4>--------------------------------------</h4>
            <h4>Admin-2 :Antu Das</h4>
            <h5>Email   : xxx....@gmail.com </h5>
            <h5>Cellphone: 015********</h5>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
        </DialogActions>
      </Dialog>
           <h1 className="head">E-MEDICINE</h1>
           <h3>The Best Online Pharmacy</h3>
           <nav class="nav">
           <Link to="/shop" style={{marginLeft:"300px"}}>HOME</Link>
           <Link to="/review">MY CART</Link>
           <Link to="/ConnectDoc">CON TO DOC</Link>
           <Link to="/Instructions">INSTRUCTIONS</Link>
           <Link to="/LoginPage">ADMIN</Link>
           <input className='search1' type="text" name="search" placeholder="SEARCH" required/>

            </nav>
        </div>
    );
};

export default Header;