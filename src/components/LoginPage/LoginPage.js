import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className='container'>
            <h1 className="head33 xx">E-MEDICINE</h1>
           <h2 className="head33 yy">Your trusted online pharmacy</h2>
           <h4 className="head33 zz"> Enter Username And Password To Sign In</h4>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                <h5 className="up">USERNAME:</h5>
            <input type="text" name="search" placeholder="USERNAME" required/>
            </div>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <h5 className="up">PASSWORD:</h5><input type="password" name="search" placeholder="PASSWORD" required/>
            </div>
            <div className="usern" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <a href="/shop">
             <button className='b3' href="/shop">LOGIN</button>
             </a>
             
            </div>
            <h5 className='hs'>Don't Have An Account??</h5>
            <a href="/Signup">
             <button className='b2' href="/Signup">SIGNUP</button>
             </a>
             </div>
        
    );
};

export default LoginPage;