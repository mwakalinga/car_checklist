function signout(){
    firebase.auth().signOut()
        .then(function() {
            console.log("user sign out");
            window.location.href = "login.html";
            // Sign-out successful.
        }).catch(function(error) {
            console.log(error);
            alert(error);
            // An error happened.
        });

}

// firebase.firestore().enablePersistence().then(function(){
//     console.log("activited");
// })
//   .catch(function(err) {
//       if (err.code == 'failed-precondition') {
//           // Multiple tabs open, persistence can only be enabled
//           // in one tab at a a time.
//           console.log(err);
//           // ...
//       } else if (err.code == 'unimplemented') {
//           // The current browser does not support all of the
//           // features required to enable persistence
//           // ...
//           console.log(err);
//       }
//   });
// // Subsequent queries will use persistence, if it was enabled successfully
  