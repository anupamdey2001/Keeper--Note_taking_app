import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA0iSt6iS_Tb91nZP_LB716Fwk1vIyfEJQ",
    authDomain: "keeper-6363b.firebaseapp.com",
    projectId: "keeper-6363b",
    storageBucket: "keeper-6363b.appspot.com",
    messagingSenderId: "242058277010",
    appId: "1:242058277010:web:0ff05a3d0c2b5a3ed3b64b"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;