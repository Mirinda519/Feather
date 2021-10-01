// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBHdyTwFHRBAqjkbqRNbWtHQKW77dlNoIY",
      authDomain: "kwitter-ad148.firebaseapp.com",
      databaseURL: "https://kwitter-ad148-default-rtdb.firebaseio.com",
      projectId: "kwitter-ad148",
      storageBucket: "kwitter-ad148.appspot.com",
      messagingSenderId: "477500694587",
      appId: "1:477500694587:web:3a8ce232a62b42459dfc1e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
