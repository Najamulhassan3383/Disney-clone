// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY8ESFEeJSCHC4aNWEHsUYCpZKj6P970I",
  authDomain: "disneyplus-clone-2df0d.firebaseapp.com",
  projectId: "disneyplus-clone-2df0d",
  storageBucket: "disneyplus-clone-2df0d.appspot.com",
  messagingSenderId: "923116325040",
  appId: "1:923116325040:web:bfdd590034a61bd0dcd375",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default app;
