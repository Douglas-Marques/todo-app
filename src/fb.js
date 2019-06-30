import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWZp3UpOQV0THmi-0k0Enaa5F4b5Jh1cQ",
    authDomain: "todo-ninja-8e50a.firebaseapp.com",
    databaseURL: "https://todo-ninja-8e50a.firebaseio.com",
    projectId: "todo-ninja-8e50a",
    storageBucket: "todo-ninja-8e50a.appspot.com",
    messagingSenderId: "773825210877",
    appId: "1:773825210877:web:e2b5aef06f4cea62"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db
