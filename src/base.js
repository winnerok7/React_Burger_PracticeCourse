import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyDZ8W2GDtyyzLbBTorhQpZWUpOmhhN15ds",
   authDomain: "hot-burgers-f3ea3.firebaseapp.com",
   databaseURL: "https://hot-burgers-f3ea3-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "hot-burgers-f3ea3",
   storageBucket: "hot-burgers-f3ea3.appspot.com",
   messagingSenderId: "1035395133292",
   appId: "1:1035395133292:web:27fe4209140275f2550d49"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
