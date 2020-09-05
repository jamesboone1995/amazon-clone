import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxi_X6m1orPMIaMrxRIo8KUQGrwr2jkek",
    authDomain: "clone-6086f.firebaseapp.com",
    databaseURL: "https://clone-6086f.firebaseio.com",
    projectId: "clone-6086f",
    storageBucket: "clone-6086f.appspot.com",
    messagingSenderId: "631817313280",
    appId: "1:631817313280:web:7dde0e0ee79688f48f4ce5",
    measurementId: "G-3PR9T6ZLJ6"
});

const auth = firebase.auth();

export { auth }