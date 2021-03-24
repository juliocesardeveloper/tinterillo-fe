import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAjVRZqKLBmFnlXOPERuAYjQ77v3U1KdJY",
  authDomain: "tinterillo-app.firebaseapp.com",
  projectId: "tinterillo-app",
  storageBucket: "tinterillo-app.appspot.com",
  messagingSenderId: "1096597203768",
  appId: "1:1096597203768:web:1973154190dc7422732fcd",
  measurementId: "G-VL5RBRD68J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}