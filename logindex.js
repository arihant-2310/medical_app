firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $(".login-cover").hide();
    var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();

  } else {
    // No user is signed in.
      $(".login-cover").show();
    var dialog1 = document.querySelector('#loginDialog');
    if (! dialog1.showModal) {
      dialogPolyfill.registerDialog(dialog1);
    }
    dialog1.showModal();
  }
});

$("#loginBtn").click(
  function(){

      var email= $("#loginEmail").val();
      var password= $("#loginPassword").val();

      if(email != "" && password != ""){
        $("#loginProgress").show();
        $("#loginBtn").hide();

        firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
            $("#loginError").show().text(error.message);
            $("#loginProgress").show();
            $("#loginBtn").hide();

        });
      }
    }
);
// logout section

$("#signoutBtn").click(
  function(){
    firebase.auth().signOut().then(function(){
      //sign out successful
      $("#loginBtn").show();
      $("#loginProgress").hide();


    }, function(error){
      //an error happened
      alert(error.message);
    });
  }
);
