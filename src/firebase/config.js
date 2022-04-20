
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyACLayCznPaWCW59Fq89o59riGFg9NwiQY",
  authDomain: "olx-demo-df94d.firebaseapp.com",
  projectId: "olx-demo-df94d",
  storageBucket: "olx-demo-df94d.appspot.com",
  messagingSenderId: "477523570359",
  appId: "1:477523570359:web:c85d0da287f0d66bf16732"
};

export default firebase.initializeApp(firebaseConfig)
