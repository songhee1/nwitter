import {Route, Routes} from 'react-router-dom';
import Auth from '../routes/Auth';
import EditProfile from '../routes/EditProfile';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import { useState, Fragment } from 'react';

const MyRoute=({isLoggin})=>{
 
 return(
     <Fragment>
    {isLoggin ?
    <Fragment>
    <Routes>
      <Route path="/" element={<Home />}/>   
    </Routes>
    </Fragment> : 
    <Fragment>
    <Routes>
       <Route path="/" element={<Auth />}/>
    </Routes>
    </Fragment>
    }
    </Fragment>    
  );
}
export default MyRoute;