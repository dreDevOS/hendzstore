(function()  
{ 


 var config = 
 
 
 {
     apiKey: "AIzaSyBcRdcmeKxUzSj9artsU4xGYGDF5vz9cJc" ,
     authDomain: "https://drehendz.firebaseapp.com/__/auth/handler",
     database: "https://drehendz.firebaseio.com/",
     storageBucket: "gs://drehendz.appspot.com"


 }


   firebase.initializeApp(config);

   angular
    .module('app', ['firebase'])
    .controller('MyCtrl', function($firebaseObject) {const rootRef = firebase.database(). ref().child('angular');
    const ref = rootRef.child('object');
    this.object = $firebaseObject(ref);
 }  )
} () );