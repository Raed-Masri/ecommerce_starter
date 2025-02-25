// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqD8fTi4lxZZTrIBtFUQ_VGf5BSCsXSJA",
  authDomain: "authentication-a9ea5.firebaseapp.com",
  projectId: "authentication-a9ea5",
  storageBucket: "authentication-a9ea5.firebasestorage.app",
  messagingSenderId: "597834139393",
  appId: "1:597834139393:web:448db035242895a1bcbd00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
