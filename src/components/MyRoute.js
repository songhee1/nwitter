import {Route, Routes} from 'react-router-dom';
import Auth from '../routes/Auth';
import EditProfile from '../routes/EditProfile';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import { useState, Fragment } from 'react';
import Navigation from './Navigation';
const MyRoute=({isLoggin})=>{
 
 return(
    <Fragment>
    {isLoggin && <Navigation/>}  
    {isLoggin ?
    <Fragment>
    <Routes>
      <Route path="/" element={<Home />}/>   
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </Fragment> : 
    <Fragment>
    <Routes>
       <Route path="/auth" element={<Auth />}/>
    </Routes>
    </Fragment>
    }
    </Fragment>    
  );
}
export default MyRoute;