import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUA41Qo9o0hE5ZFYvHbPTua78O885KYQM",
  authDomain: "catch-of-the-day-ms55.firebaseapp.com",
  databaseURL:
    "https://catch-of-the-day-ms55-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

// this is a default export
export default base;
