/**
 *  steps to use firebase
 * 1. create a project on console.firebase.google.com
 * 2.npm install firebase
 * 3.Register web app in firebase
 * 4.copy firebase init withconfig from firebase project settings into a file firebase.init.js
 * 5. export default app from firebaseinit.js 
 * 6. import getAuth from 'firebase/auth' and create const auth = getAuth(app); in app.jsx
 * 7.import app firebase init.js in to your app.jsx
 * 8. turn on google authentication (firebase>authentication> google sign in)
 * 9. create google provider
 * 10. use signnwithPopup and pass auth and provider
 * 11. handle .then if (succesfull) and error (if error)
 * 
 * 




 */