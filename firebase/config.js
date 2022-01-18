 import * as firebase from "firebase";
 import "firebase/auth";
 import "firebase/storage";
 import "firebase/firestore";


  const firebaseConfig = {
    apiKey: "########",
    authDomain: "########",
    projectId: "########",
    storageBucket: "########",
    messagingSenderId: "########",
    appId: "########",
    measurementId: "########"
  };

export default firebase.initializeApp(firebaseConfig);
