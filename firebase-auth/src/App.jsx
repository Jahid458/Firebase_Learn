import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "./App.css";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth,provider)
      .then( result => {
         console.log(result.user);
      })
      .catch(error => {
         console.error('error', error);
      })
  };

  return (
    <>
      <div className="app">
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
      </div>
    </>
  );
}

export default App;
