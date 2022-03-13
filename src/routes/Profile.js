import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import {Link} from 'react-router-dom';
function Profile(){
    const auth=getAuth();
    const logOutBtn=()=>{
        signOut(auth).then(()=>{
            console.log('log out!');
        }).catch((error)=>console.log(error));
    }
    return(
    <span>
    Profile
    <button onClick={logOutBtn}><Link to="/auth">Log out</Link></button>
    </span>
    );
}

export default Profile;