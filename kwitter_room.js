var firebaseConfig = {
      apiKey: "AIzaSyC3Ngil3cUGxxoE9S5heWfj6fF4uBBZk5g",
      authDomain: "kwitter-c974a.firebaseapp.com",
      databaseURL: "https://kwitter-c974a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c974a",
      storageBucket: "kwitter-c974a.appspot.com",
      messagingSenderId: "620109607090",
      appId: "1:620109607090:web:76c97fba62e0247d0519ab",
      measurementId: "G-CK35VK8V7H"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name + "!"
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}