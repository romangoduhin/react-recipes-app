import {auth} from "./firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import {toast} from "react-toastify";
import {errorsList} from "./errorsList";

export const firebaseAPI = {
    signUpUser: async (email, password) => {
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            return user
        } catch (err) {
            toast.error(errorsList[err.code]);
        }
    },
    signInUser: async (email, password) => {
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            return user
        } catch (err) {
            toast.error(errorsList[err.code]);
        }
    },
    signOutUser: async () => {
        try {
            await signOut(auth)
        } catch (err) {
            console.log(err)
        }
    },
}