import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseAuthApp from "../Pages/Login/Firebase/firebase.init";

FirebaseAuthApp();

const useFirebase = () => {
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const auth = getAuth();

  //State Declearing
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Google Sign in
  const SignInUsingGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
       
        const { photoURL, displayName, email } = result.user;
        const userInfo = { photo: photoURL, name: displayName, email: email };
        setUser(userInfo);
        alert(`${userInfo.name} Logged in Successfully`);
      })
      .catch((error) => {
        setError(error);
      });
  };
  //Github Sign in
  const SignInUsingGithub = () => {
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        console.log(result);
        const { photoURL, displayName, email } = result.user;
        const userInfo = { photo: photoURL, name: displayName, email: email };
        setUser(userInfo);
        alert(`${userInfo.name} Logged in Successfully`);
      })
      .catch((error) => {
        setError(error);
      });
  };

  //Continue User Info
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
   
      } else {
        setError("");
      }
    });
  }, []);

  // LogOut
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      });
  };

  //User Info
  const handleNameChange = e => {
    setName(e.target.value);
  };

  // Email Info
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  //Password Info
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  //Registration
  const handleRegistration = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { photoURL, displayName, email } = result.user;
        const userInfo = { photo: photoURL, name: displayName, email: email };
        setUser(userInfo);
        console.log(userInfo);
        setError("");
        alert("User Has Been Created Successfully");
      })
      .catch((error) => {
        setError(error);
      });
  };

  //Sign in with Mail & Password
  const handlesignInWithEmailAndPassword = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password )
    .then((result) => {
      const { photoURL, displayName, email } = result.user;
      const userInfo = { photo: photoURL, name: displayName, email: email };
      setUser(userInfo);
        setError("");
        alert("Login Successfully");
      })
      .catch((error) => {
        setError(error);
        alert(error);
      });
  };

  return {
    SignInUsingGoogle,
    user,
    SignInUsingGithub,
    handleRegistration,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    LogOut,
    handlesignInWithEmailAndPassword,
    error,
  };
};

export default useFirebase;