/*var database = firebase.database();
var name= document.getElementById("name");
var email= document.getElementById("email");
var password= document.getElementById("password");
var re_password=document.getElementById("re-password");
function register(){
window.alert("confirm registration?");
  firebase.database().ref().set({
      username: name.value,
      useremail: email.value,
      userpassword: password.value,
      repassword: re_password

  });
console.log(name.value);

}
/*function register()
{window.alert("okay");
  var firebaseRef = firebase.database().ref();
  var messageText = name.value;
  firebaseRef.push().set(messageText);

}
console.log(messageText.value);*/



var database = firebase.database();
var user = document.getElementById("user");
var email= document.getElementById("email");
var password= document.getElementById("password");
var re_password= document.getElementById("re_password");
 /*function insertdoctor(){
  window.alert("okay");
  var firebaseRef = firebase.database().ref();
  var messageText = symptoms.value;
  firebaseRef.push().set(messageText);
  console.log(messageText);

}*/

function register() {
  window.alert("okay");
  firebase.database().ref("USERS").child(user.value).set({


    Email: email.value,
    Password: password.value


  });
  console.log(user);
}
