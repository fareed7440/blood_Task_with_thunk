import firebase from  'firebase'

 var config = {
    apiKey: "AIzaSyBMjb4LJsxLtmMuY920QeZUY4NbpnzuXN0",
    authDomain: "meetinginvite-45619.firebaseapp.com",
    databaseURL: "https://meetinginvite-45619.firebaseio.com",
    storageBucket: "meetinginvite-45619.appspot.com",
    messagingSenderId: "747476512629"
  };
  firebase.initializeApp(config);


export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();