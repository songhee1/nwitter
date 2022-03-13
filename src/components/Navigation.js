import React from 'react';
import {Link} from 'react-router-dom';
function Navigation(){
   return(
   <nav>
       <ul>
        <Link to="/">Home</Link>
       </ul>
       <ul>
        <Link to="/profile">Profile</Link>
       </ul>
   </nav>
   );
}
export default Navigation;