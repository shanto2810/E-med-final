import React from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase.config";
 
import { getAuth,updateProfile,signInWithEmailAndPassword ,createUserWithEmailAndPassword, signInWithPopup,signOut, GoogleAuthProvider } from "firebase/auth";
import { ControlPointDuplicateOutlined } from "@material-ui/icons";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Header from '../Header/Header';
const app = initializeApp(firebaseConfig);

function Login() {
  const [newUser,setNewUser]=useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password:"",
    photo: "",
    error:''
  });
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const history=useHistory();
  const location=useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser={
          isSignedIn:true,
          name:displayName,
          email:email,
          photo:photoURL
        }
        setUser(signedInUser);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        const signedInUser={
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
          success:false
        }
        setUser(signedInUser);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });

     
  };
  const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
  const handlechange=(event)=>{
    let isFormValid=true;

    if(event.target.name==='email')
    {
      isFormValid= /\S+@\S+\.\S+/.test(event.target.value);
    }
    if(event.target.name==="password")
    {
      const isPasswordValid=event.target.value.length>6;
      const passwordHasNumber=/\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if(isFormValid)
    {
      const newUserInfo={...user};
      newUserInfo[event.target.name]=event.target.value;
      setUser(newUserInfo);
    }
  }
  const handlesubmit=(event)=>{
    if(newUser && user.email && user.password)
    {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const newUserInfo={...user};
        newUserInfo.error='';
        newUserInfo.success=true;
        setUser(newUserInfo);
       
        updateUserName(user.name);
      })
      .catch((error) => {
        const newUserInfo={...user};
        newUserInfo.error=error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
      });
   
    }
    if(!newUser && user.email && user.password)
    {
      const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then(res => {
    const newUserInfo={...user};
    newUserInfo.error='';
    newUserInfo.success=true;
    setUser(newUserInfo);
    setLoggedInUser(newUserInfo);
    history.replace(from);
    console.log('sign in user info',res.user);
  })
  .catch((error) => {
    const newUserInfo={...user};
    newUserInfo.error=error.message;
    newUserInfo.success=false;
    setUser(newUserInfo);
  });

    }
    
    event.preventDefault();

  }
  const updateUserName=name=>{
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      console.log('user name updated successfully')
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div>
  <div>
    <Header></Header></div>
    <div style={{textAlign:'center'}}>
     {/* { user.isSignedIn ? <button onClick={handleSignOut}>sign out</button>:
     <button onClick={handleSignIn}>sign in</button>}
      {
        user.isSignedIn && 
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      } */}

      <h1>Admin Authentication</h1>
      <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" />
      <label htmlFor="newUser">Save Sign in</label>
      {/* <form onSubmit={handlesubmit}>
       {  newUser && <input onBlur={handlechange} name="name" type="text" />}
        <br />
        <input type="text" name="email" onBlur={handlechange} placeholder="Email" required />
        <br />
        <input type="password" name="password" onBlur={handlechange} placeholder="Password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color:'red'}}>{user.error}</p>
      {user.success &&  <p style={{color:'green'}}>user {newUser ? 'created':'Logged In'} successfully </p> } */}
    <div><h5 className="up">ADMIN PASSWORD:</h5>
            <input type="password" name="search" placeholder="PASSWORD" required/>
            </div>
         <button className="b4 yyy" variant="outlined" onClick={handleClickOpen}>
        ENTER
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
    </div>
  );
}

export default Login;
