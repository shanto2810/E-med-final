import React from 'react';
import './LoginPage.css';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const LoginPage = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className='container'>
            <h1 className="head33 xx">E-MEDICINE</h1>
            <br />
           <h2 className="head33 yy">Your trusted online pharmacy</h2>
           <br />
           <h3 className="head33 yy">Admin Login:</h3>
        
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h5 className="up">PASSWORD:</h5><input type="password" name="search" placeholder="PASSWORD" required/>
            </div>
            <button className="b4" variant="outlined" onClick={handleClickOpen}>
        Admin Login
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           E-MEDICINE
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <h1 className="head33 xx">E-MEDICINE</h1>
           <h3 className="head33 zz"> Add-Delete Product !!</h3>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                <h5 className="up">Product-Name :</h5>
            <input type="text" name="search" placeholder="PRODUCT-NAME" required/>
            </div>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h5 className="up">Seller/Company :</h5>
            <input type="text" name="search" placeholder="SELLER" required/>
            </div>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h5 className="up">Unit Price :</h5>
            <input type="text" name="search" placeholder="$$" required/>
            </div>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h5 className="up">Date:</h5>
            <input type="date" name="search" placeholder="DATE" required/>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           ADD
          </Button>
          <Button onClick={handleClose} color="primary">
           REMOVE
          </Button>
        </DialogActions>
      </Dialog>
             </div>
        
    );
};

export default LoginPage;