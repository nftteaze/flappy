import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAb60uAvVcwdHpPad4jFpUJVZxRRgxXzg8",
    authDomain: "react-flappy-bird.firebaseapp.com",
    projectId: "react-flappy-bird",
    storageBucket: "react-flappy-bird.appspot.com",
    messagingSenderId: "865153784849",
    appId: "1:865153784849:web:8fd0218b30a283330665b0",
    measurementId: "G-F5HCXENQPC",
};
const app = firebase.initializeApp(firebaseConfig);

export default app;
