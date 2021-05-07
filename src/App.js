import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import { login, selectUser , logout} from './features/userSlice';
import { auth, provider } from './firebase';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    
    auth.onAuthStateChanged((authuser)=>{
      if(authuser){
        dispatch(
          login ({
          uid:authuser.uid,
          photo: authuser.photoURL,
          email: authuser.email,
          displayName: authuser.displayName
        }
        ))
      }
      else{
          dispatch(logout())
      }
    })

  }, [dispatch])
  return (
    <div className="app">
      {user ? (
      <>
        <Sidebar/>
        <Chat/>
      </>): 
      (
        <Login/>
      )
      
      }
       
    </div>
  );
}

export default App;
