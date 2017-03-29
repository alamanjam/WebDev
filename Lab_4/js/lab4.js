 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCwYrmuGGdTTX8Op81Gnvn1KA6EYpvRp4U",
    authDomain: "lab3-514be.firebaseapp.com",
    databaseURL: "https://lab3-514be.firebaseio.com",
    storageBucket: "lab3-514be.appspot.com",
    messagingSenderId: "882846046088"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
    var myDataRef = database.ref('posts');
    myDataRef.on('value', function(snapshot) {
        console.log(snapshot.val());
    myDataRef.set({
        
    });
    });