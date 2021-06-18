var firebaseConfig = {
    apiKey: "AIzaSyAJc9PpySDNFOUA8Odjq9YSvBA4hCiES5k",
    authDomain: "kwitter-practice-a.firebaseapp.com",
    databaseURL: "https://kwitter-practice-a-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-a",
    storageBucket: "kwitter-practice-a.appspot.com",
    messagingSenderId: "635654695464",
    appId: "1:635654695464:web:60e7411cc8a392a884231d",
    measurementId: "G-NBNL539QBW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

password_c_n = document.getElementById("password").value;
confirm_password_c_n = document.getElementById("cpassword").value;

function check() {
    if (password_c_n == confirm_password_c_n) {
        signUp();
    } else {
        alert("Passwords don't match!");
    }
}

function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}



function signIn() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
}


function signOut() {

    auth.signOut();
    alert("Signed Out");

}



auth.onAuthStateChanged(function (user) {

    if (user) {

        var email = user.email;
        alert("Active User " + email);

        //Take user to a different or home page

        //is signed in

    } else {

        alert("No Active User");
        //no user is signed in
    }



});