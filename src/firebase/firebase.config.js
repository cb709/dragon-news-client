// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByzt9wA0Ty5_oHcFqsuj1f5MRTgLyCp5E",
  authDomain: "dragon-news-client-ab39a.firebaseapp.com",
  projectId: "dragon-news-client-ab39a",
  storageBucket: "dragon-news-client-ab39a.appspot.com",
  messagingSenderId: "673066148273",
  appId: "1:673066148273:web:fe01512e865e6020ee1d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;