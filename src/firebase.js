import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFSg9CWPOhBwZuN8jn3AWWzDoETtQjqdY",
  authDomain: "fcf-project-dd483.firebaseapp.com",
  databaseURL: "https://fcf-project-dd483.firebaseio.com",
  projectId: "fcf-project-dd483",
  storageBucket: "fcf-project-dd483.appspot.com",
  messagingSenderId: "640081830330",
  appId: "1:640081830330:web:9325c48d713af3106fbd83",
});

const db = firebaseApp.firestore();

export default db ;
