// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDoa6pQmSBKKr5e7USPE3nMWrreQ2HGfSc",
authDomain: "tpf-pk-d56b0.firebaseapp.com",
projectId: "tpf-pk-d56b0",
storageBucket: "tpf-pk-d56b0.appspot.com",
messagingSenderId: "913322622123",
appId: "1:913322622123:web:5e750b2a75549a47f84bee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const userSignIn = async () => {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

const userSignOut = async () => {
    signOut(auth).then(() => {
        alert("You have been signed out!")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

 onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("You are authenticated with Google");
        console.log(user);
    }
})

signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);
