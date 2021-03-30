import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCEDJms2zEGDM1cj0kf_JCxIFtqLg3FBq0",
    authDomain: "ingenious-app-studio-dashboard.firebaseapp.com",
    projectId: "ingenious-app-studio-dashboard",
    storageBucket: "ingenious-app-studio-dashboard.appspot.com",
    messagingSenderId: "849435423166",
    appId: "1:849435423166:web:be996512495a5acca0c9ef",
    measurementId: "G-77LDHF4T6V"
};

const db = firebase.initializeApp(firebaseConfig).firestore();

db.settings({ timestampsInSnapshots: true });

export default db;