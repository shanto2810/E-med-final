import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './components/Notfound/Notfound';
import Inventory from './components/Inventory/Inventory';
import Instructions from './components/Instructions/Instructions';
import Review from './components/Review/Review';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ConnectDoc from './components/ConnectDoc/connectdoc';
import LoginPage from './components/LoginPage/LoginPage';
import Signup from './components/Signup/Signup';
export const UserContext=createContext();
function App(props) {
  const[loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      {/* <h3>email:{loggedInUser.email}</h3> */}
    
     <Router>
     {/* <Header></Header> */}
       <Switch>
       <Route path="/LoginPage">
           <LoginPage></LoginPage>
         </Route>
         <Route path="/shop">
           <Shop></Shop>
         </Route>
         <Route path="/Signup">
           <Signup></Signup>
         </Route>
         <Route path="/Instructions">
           <Instructions></Instructions>
         </Route>
         <Route path="/ConnectDoc">
           <ConnectDoc></ConnectDoc>
         </Route>
         <Route path="/review">
           <Review></Review>
         </Route>
         <PrivateRoute path="/inventory">
           <Inventory></Inventory>
         </PrivateRoute>
         <Route path="/Login">
           <Login></Login>
         </Route>
         <PrivateRoute path="/Shipment">
          <Shipment></Shipment>
         </PrivateRoute>
         <Route exact path="/">
           <LoginPage></LoginPage>
         </Route>
         <Route path="/Product/:productkey">
          <ProductDetail></ProductDetail>
         </Route>
         <Route path="*">
           <Notfound></Notfound>
         </Route>
       </Switch>
     </Router>
    
    
    </UserContext.Provider>
  );
}

export default App;
