import { async } from '@firebase/util';
import {react, useState} from 'react';
import { authService } from '../fbase';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
    } from 'firebase/auth';

function Auth(){
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
    const [newAccount, setNewAccount]=useState(false);
    const [error, setError]=useState("");
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
      try{
      let data;
      if(newAccount){
          //create new account
        data= await createUserWithEmailAndPassword(auth,email,pwd);
      }else{
          //login
        data= await signInWithEmailAndPassword(auth,email, pwd);  
      }
      console.log(data);
    }catch(error){
      setError(error.message);
    }
}
    const toggleAccount=()=>{
        setNewAccount(prev=>!prev)
    };
    const onSocialClick= async (event)=>{
       let provider;
       const {target:{name}}=event;
       try{
       if(name==="google"){
         provider=new GoogleAuthProvider();
       } 
       const data=await signInWithPopup(auth,provider);
       console.log(data);
       }catch(error){
         console.log(error);
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
            {error}
            </form>
            <span onClick={toggleAccount}>{newAccount?"Log In":"Create Account"}</span>
            <button name="google" onClick={onSocialClick}>Continue with Google</button>
        </div>
    );
}

export default Auth;
