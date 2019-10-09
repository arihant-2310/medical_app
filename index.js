
var selectedfile;
var storage=firebase.storage();
var storageRef1=storage.ref();
$(".file-select").on("change",function(event){
  selectedfile=event.target.files[0];
});
// Create a root reference
function upload()
{
var filename=selectedfile.name;
var storageRef = firebase.storage().ref('/images/'+filename);
var uploadTask = storageRef.put(selectedfile);
// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  // Handle unsuccessful uploads
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
  });
});


}
//retrieve
$('#list').find('tbody').html('');
var i=0;
storageRef1.child('/images/').listAll().then(function(result){
      result.items.forEach(function(imageRef){
        //  console.log("Image Reference"+imageRef.toString());
        i++;
        displayImage(i,imageRef);




      });

});
function displayImage(row,images){
    images.getDownloadURL().then(function(url){
      //console.log(url);
      let new_html='';
      new_html+='<tr>';
      new_html+='<td>';
      new_html+=row;
      new_html+='</td>';
      new_html+='<td>';
      new_html+='<img src="'+url+'"width="100px;" style="float:right">';
      new_html+='</td>';
      new_html+='</tr>';
      $('#list').find('tbody').append(new_html);

    });

}
function visible()
{
  $('.file-select').css(  "visibility","visible");

}




//------------------form html-----------------
var database = firebase.database();
var userid = document.getElementById("userid");
var diseases= document.getElementById("diseases");
var symptoms= document.getElementById("symptoms");
var apdate= document.getElementById("apdate");
var prescriptions= document.getElementById("prescriptions");
var description = document.getElementById("description");
 /*function insertdoctor(){
  window.alert("okay");
  var firebaseRef = firebase.database().ref();
  var messageText = symptoms.value;
  firebaseRef.push().set(messageText);
  console.log(messageText);

}*/

function insertdoctor() {
  
  firebase.database().ref().child(userid.value).push().set({


    Symptoms: symptoms.value,
    Diseases: diseases.value,
    Date: apdate.value,
    Prescriptions: prescriptions.value,
    Description: description.value


  });
    console.log(UserId);
}
