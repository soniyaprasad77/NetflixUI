import React, { useState, useRef } from "react";
import Header from "./Header";
import formValidation from "../utils/formValidation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVTAR } from "../utils/constants";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current?.value;
    const errorMessage = formValidation(emailValue, passwordValue, nameValue);
    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }
    setErrorMessage(null);
    //    //console.log(emailValue, passwordValue, nameValue);
    if (errorMessage) return;
    //signup signin logic
    if (!isSignedIn) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;
          //console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              // Profile updated!
              dispatch(
                addUser({
                  email: auth.currentUser.email,
                  displayName: auth.currentUser.displayName,
                  id: auth.currentUser.uid,
                  photoURL: auth.currentUser.photoURL,
                })
              );
              //console.log(auth.currentUser);

              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //console.log(auth.currentUser);
          dispatch(
            addUser({
              email: auth.currentUser.email,
              displayName: auth.currentUser.displayName,
              id: auth.currentUser.uid,
              photoURL: auth.currentUser.photoURL,
            })
          );
          const user = userCredential.user;
          //console.log(user);
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div className="relative  w-full h-screen">
      <Header />
      <div className="absolute">
        <img
          style={{ filter: "brightness(50%)" }}
          src={BG_URL}
          alt=" background"
        />
      </div>
      <div className="absolute right-0 left-0 w-4/12 mx-auto my-16 bg-black opacity-80 pb-16 pt-6 px-8 m-2 text-white rounded-md">
        <h1 className="text-2xl px-4 pt-2 pb-6 font-bold">
          {isSignedIn ? <>Sign In</> : <>Sign Up</>}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="px-4"
        >
          {!isSignedIn && (
            <>
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="w-full p-3 my-2  bg-slate-800 rounded-md"
              />
            </>
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="w-full p-3 my-2  bg-slate-800 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 my-2  bg-slate-800 rounded-md"
          />
          <p className="text-red-500 text-sm">{errMessage}</p>
          <button
            onClick={handleButtonClick}
            className="w-full p-2 my-4 bg-red-600 text-white rounded-md"
          >
            {isSignedIn ? <>Sign In</> : <>Sign Up</>}
          </button>
        </form>
        <p
          onClick={() => setIsSignedIn(!isSignedIn)}
          className="px-4 pt-6 pb-2 text-sm"
        >
          {isSignedIn ? (
            <>
              New here?{" "}
              <span className=" cursor-pointer  font-bold">Sign up now</span>
            </>
          ) : (
            <>
              Already a user?{" "}
              <span className=" cursor-pointer  font-bold">Sign in now</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
