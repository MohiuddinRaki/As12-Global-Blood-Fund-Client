import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCJKlkONmTOKBzeX-vE_dTgEUO9g_8Nhyo",
//   authDomain: "b8a12-client-side.firebaseapp.com",
//   projectId: "b8a12-client-side",
//   storageBucket: "b8a12-client-side.appspot.com",
//   messagingSenderId: "421914733901",
//   appId: "1:421914733901:web:95b5df87a295cb53369b04"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);