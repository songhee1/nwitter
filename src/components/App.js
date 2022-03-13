import { Route } from 'react-router-dom';
import '../App.css';
import MyRoute from './MyRoute';
import {useEffect, useState} from 'react';
import {authService} from '../fbase';

function App() {
  console.log(authService.currentUser);
  const [initialize, setInitialize]=useState(false);
  const [isLoggin, setIsLoggin]=useState(false); 
  try{
  useEffect(()=>{
    authService.onAuthStateChanged(user=>{
      if(user){
      setIsLoggin(true);
      setInitialize(true);  
    } else{
      setIsLoggin(false);
    }
    });
  },[])
  } catch(error){
    console.log(error);
  }
  return (
    <div className="App">
      {initialize?<MyRoute isLoggin={isLoggin}/>:<div>Initialize...</div>}
    </div>
  );
}

export default App;
