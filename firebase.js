import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBg7644ZGy1xIDdGRFWATmhgg6y89zYyQ4",
  authDomain: "imdbytclone.firebaseapp.com",
  projectId: "imdbytclone",
  storageBucket: "imdbytclone.appspot.com",
  messagingSenderId: "278550972879",
  appId: "1:278550972879:web:53608eca39d83dd195eaba",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
