// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDHt1E_rkKp1X5mWlVibGs7tIEJ1DLAzJs",
    authDomain: "resumeproject-ac4b9.firebaseapp.com",
    databaseURL: "https://resumeproject-ac4b9.firebaseio.com",
    projectId: "resumeproject-ac4b9",
    storageBucket: "resumeproject-ac4b9.appspot.com",
    messagingSenderId: "147869432269",
    appId: "1:147869432269:web:fa0122399a0cace74cec84",
    measurementId: "G-YQLGCQ01LK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



var contactRef = firebase.database().ref().child("ContactForm");

document.getElementById('cForm').addEventListener('submit',submitForm);

function submitForm(e){
e.preventDefault();
var name = getInput('name');
var email  = getInput('email');
var subject  = getInput('subject');
var description  = getInput('description');

saveForm(name,email,subject,description);
document.getElementById('cForm').reset();

}

function getInput(id){
return document.getElementById(id).value;
}

function saveForm(name,email,subject,description){
var newContactRef = contactRef.push();
newContactRef.set({
name : name,
email : email,
subject : subject,
description : description
});
}
