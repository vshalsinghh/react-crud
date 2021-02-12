

var firebaseConfig = {
    apiKey: "AIzaSyBEQXwpUxKidxEE-Ai3iCsOb_eHWjUXtXk",
    authDomain: "react-crud-96d12.firebaseapp.com",
    databaseURL: "https://react-crud-96d12-default-rtdb.firebaseio.com",
    projectId: "react-crud-96d12",
    storageBucket: "react-crud-96d12.appspot.com",
    messagingSenderId: "696193038238",
    appId: "1:696193038238:web:39fc38803451919b58c88f"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();