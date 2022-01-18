 import * as firebase from "firebase";
 import "firebase/auth";
 import "firebase/storage";
 import "firebase/firestore";


  const firebaseConfig = {
    apiKey: "AIzaSyB9aBC4pK_fHH7JhlaPKfMj166CxhmVs9g",
    authDomain: "wonderful-dawns.firebaseapp.com",
    projectId: "wonderful-dawns",
    storageBucket: "wonderful-dawns.appspot.com",
    messagingSenderId: "571200868042",
    appId: "1:571200868042:web:0d9de5beb53a819f732e33",
    measurementId: "G-0M4XM9G66Q"
  };

export default firebase.initializeApp(firebaseConfig);