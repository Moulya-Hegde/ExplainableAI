
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7bOvJB3tYwH7i_o3y2RfUKQygT022tiM",
  authDomain: "explainableai-2c076.firebaseapp.com",
  projectId: "explainableai-2c076",
  storageBucket: "explainableai-2c076.firebasestorage.app",
  messagingSenderId: "643095670319",
  appId: "1:643095670319:web:6818aadb60d7ce1ddbe0da",
  measurementId: "G-8SS50582FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
export { Auth, provider };