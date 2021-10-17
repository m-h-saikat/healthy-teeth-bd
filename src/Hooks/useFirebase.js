

import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged ,GithubAuthProvider   ,createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import FirebaseAuthApp from '../Pages/Login/Firebase/firebase.init';


FirebaseAuthApp();


const useFirebase = () => {

    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

const auth = getAuth();

//State Declearing
const [user,setUser]=useState({});
const [error,setError]=useState({});
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');



//Google Sign in
    const SignInUsingGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
        .then((result) => {
            const {photoURL,displayName,email} = result.user;
         const userInfo= {photo:photoURL,name:displayName,email:email} ;
         setUser(userInfo);
   

         
          }).catch((error) => {
            setError(error);
          });

    }
//Github Sign in
    const SignInUsingGithub = () => {
        signInWithPopup(auth, GithubProvider)
        .then((result) => {
            const {photoURL,displayName,email} = result.user;
         const userInfo= {photo:photoURL,name:displayName,email:email} ;
         setUser(userInfo);
          }).catch((error) => {
            setError(error);
          });

    }

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
          }).catch((error) => {
            setError(error);
          });
          
    }
 // Email Info
      const handleNameChange = e => {
        setName(e.target.value);

      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
 
      }
    //Password Info
      const handlePasswordChange = e => {
        setPassword(e.target.value);
  

      }
    
      //Registration
const handleRegistration =(e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        const {photoURL,displayName,email} = result.user;
        const userInfo= {photo:photoURL,name:displayName,email:email} ;
        setUser(userInfo);
        setError('');
        alert("user has been created");
      }).catch((error) => {
        setError(error);
        console.log(error.message);
      });
}

//Sign in eith Mail & Password
const handlesignInWithEmailAndPassword =(e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
     setUser(result.user);
    setError('');
  

      }).catch((error) => {
        setError(error);
      });
}

     
  
    return (
       {
        SignInUsingGoogle,user,SignInUsingGithub,handleRegistration,handleNameChange,handleEmailChange,handlePasswordChange,LogOut,handlesignInWithEmailAndPassword,error
       }
    );
};

export default useFirebase;