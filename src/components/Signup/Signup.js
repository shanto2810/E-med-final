import React from 'react';
import './Signup.css';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
const Signup = () => {
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
           <h3 className="head33 zz"> Fill Up The Form !!</h3>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                <h5 className="up">FIRST NAME:</h5>
            <input type="text" name="search" placeholder="FIRST-NAME" required/>
            </div>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h5 className="up">LAST NAME:</h5>
            <input type="text" name="search" placeholder="LAST-NAME" required/>
            </div>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h5 className="up">ADDRESS:</h5>
            <input type="text" name="search" placeholder="ADDRESS" required/>
            </div>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h5 className="up">DARE OF BIRTH:</h5>
            <input type="date" name="search" placeholder="DATE-OF-BIRTH" required/>
            </div>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h5 className="up">PASSWORD:</h5>
            <input type="password" name="search" placeholder="PASSWORD" required/>
            </div>
         <button className="b4" variant="outlined" onClick={handleClickOpen}>
        Submit
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           E-MEDICINE
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            "Submission Done !!! Account Created "
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
        </DialogActions>
      </Dialog>
             </div>
        
    );
};

export default Signup;