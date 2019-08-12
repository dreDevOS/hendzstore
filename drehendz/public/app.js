document.addEventListener("DOMContent Loaded", event => {

const app = Firebase.app();


});

function googleLogin() { const provider = new Firebase.auth.googleLogin();
  Firebase.auth().signInWithPopup(provider)
    then ( result => { const user = result.user ;
        document.write('Hello ${user.displayName} ');
        console.log()
    })
    .catch (console.log)
}