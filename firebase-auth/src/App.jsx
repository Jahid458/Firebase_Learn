import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import "./App.css";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleSignOut = () =>{
     signOut(auth)
     .then( () =>{
       setUser({});
     })
     .catch(error =>{
      setUser({});
     } )
  }

  

  return (
    <>
      <div className="app">

        {
          user.email ? <button onClick={handleSignOut}> Sign out</button>
          :
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
        
        }

        
        <h2> Name is : {user.displayName}</h2>
        <p>I Know your emaill address: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
    </>
  );
}

export default App;
