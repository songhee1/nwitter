import { async } from '@firebase/util';
import {react, useState} from 'react';
import { authService } from '../fbase';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    } from 'firebase/auth';

function Auth(){
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
    const [newAccount, setNewAccount]=useState(true);
    const onChange=(event)=>{
        const {target:{name, value}}=event;
       if(name==="email"){
           setEmail(value);
       } else if(name==="password"){
           setPwd(value);
       }
    }
    const auth=getAuth();
    const onSubmit= async(e)=>{
      e.preventDefault();
      let data;
      if(newAccount){
          //create new account
        data= await createUserWithEmailAndPassword(auth,email,pwd);
      }else{
          //login
        data= await signInWithEmailAndPassword(auth,email, pwd);
      }
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
            <input name="email" type="email" 
            placeholder='Email' onChange={onChange}
            value={email} required/>
            <input type="password" placeholder='Password'
            onChange={onChange} name="password"
            value={pwd} required/>
            <input type="submit" placeholder='Log In' 
            value={newAccount?"Create new account":
            "Log In"}/>
            </form>
            <button>Continue with Google</button>
        </div>
    );
}

export default Auth;
