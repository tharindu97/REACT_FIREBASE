import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyAC811TcFQU12Fl2fvudMGmwsugLNf1TLY",
        authDomain: "todo-app-af844.firebaseapp.com",
        databaseURL: "https://todo-app-af844.firebaseio.com",
        projectId: "todo-app-af844",
        storageBucket: "todo-app-af844.appspot.com",
        messagingSenderId: "458909782607",
        appId: "1:458909782607:web:1eb74b8d8d99dfb4a5503a",
        measurementId: "G-6QB92NBSCL"

});

const db = firebaseApp.firestore();
// 2 18

export default db;