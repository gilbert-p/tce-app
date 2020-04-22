import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCwNvGWqwwyb1EjUdkV2Du7P4iBTWyOwXI",
  authDomain: "tce-website-app.firebaseapp.com",
  databaseURL: "https://tce-website-app.firebaseio.com",
  projectId: "tce-website-app",
  storageBucket: "tce-website-app.appspot.com",
  messagingSenderId: "92281284280",
  appId: "1:92281284280:web:ebe6fe95703ee7f122f64d",
  measurementId: "G-M6DRQNM5RX",
};
// Initialize Firebase
// firebase.analytics();
firebase.initializeApp(firebaseConfig);

export default firebase;
