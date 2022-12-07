import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZRuQZle_o4Y8bizJ_9alldOMqEQgLGMQ",
    authDomain: "react-recipes-f4628.firebaseapp.com",
    projectId: "react-recipes-f4628",
    storageBucket: "react-recipes-f4628.appspot.com",
    messagingSenderId: "1076618248629",
    appId: "1:1076618248629:web:68e4b13b9caba65426d9fc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);