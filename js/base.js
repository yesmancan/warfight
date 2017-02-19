localStorage.username1="";
localStorage.username2="";
(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCIf6cLUOXFCvo4ZdiF7trbE4-qQJo9vls",
    authDomain: "learningfirebase-f6f68.firebaseapp.com",
    databaseURL: "https://learningfirebase-f6f68.firebaseio.com",
    storageBucket: "learningfirebase-f6f68.appspot.com",
    messagingSenderId: "919542585532"
  };
  firebase.initializeApp(config);

  var charbar1val = document.getElementById('charbar1progress');
  var charbar2val = document.getElementById('charbar2progress');
  var char1 = document.getElementById('char1');
  var char2 = document.getElementById('char2');
  var online1 = document.getElementById('player1gameon');
  var online2 = document.getElementById('player2gameon');

  var firebaseonline = firebase.database().ref().child('user');
  var online = firebaseonline.child('online');
  online.on('value',snap => {
    document.getElementById('player1gameon').value  = JSON.stringify(snap.val(),null,3);
  });
  var healt = firebaseonline.child('healt');
  healt.on('value',snap => {
    document.getElementById('charbar1progress').value = JSON.stringify(snap.val(),null,3);
  });

  firebaseonline = firebase.database().ref().child('user1');
  online = firebaseonline.child('online');
  online.on('value',snap => {
    document.getElementById('player2gameon').value  = JSON.stringify(snap.val(),null,3);
  });
  healt = firebaseonline.child('healt');
  healt.on('value',snap => {
    document.getElementById('charbar2progress').value = JSON.stringify(snap.val(),null,3);

    var firebaseRef = firebase.database().ref().child('user');
    var username = document.getElementById('player1text').value ;
    localStorage.username1=document.getElementById('player1text').value;
    firebaseRef.push().set(localStorage.username1);
  });

}());

function p1name(e) {
  $('#player1text').keypress(function(e){
    if(e.keyCode==13)
    localStorage.username1=document.getElementById('player1text').value;
  });
}
