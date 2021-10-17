import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
const FirebaseAuthApp =() => {
    initializeApp(firebaseConfig);
}
export default FirebaseAuthApp;