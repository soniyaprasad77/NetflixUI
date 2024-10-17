import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { BG_URL, USER_AVTAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import formValidation from "../utils/formValidation";
import Header from "../components/Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  const [isLoadingForm, setIsLoadingForm] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const handleButtonClick = async () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current?.value;

    const errorMessage = formValidation(emailValue, passwordValue, nameValue);
    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }

    setIsLoadingForm(true);

    try {
      if (!isSignedIn) {
        // Sign up user with name, email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );

        await updateProfile(userCredential.user, {
          displayName: nameValue,
          photoURL: USER_AVTAR,
        });

        localStorage.setItem("userToken", userCredential.user.accessToken);

        dispatch(
          addUser({
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            id: userCredential.user.uid,
            photoURL: userCredential.user.photoURL,
          })
        );
      } else {
        // Sign in user with email and password
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );

        localStorage.setItem("userToken", userCredential.user.accessToken);

        dispatch(
          addUser({
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            id: userCredential.user.uid,
            photoURL: userCredential.user.photoURL,
          })
        );
      }
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    } finally {
      setIsLoadingForm(false);
    }
  };

  const switchAuthForm = () => {
    setIsSignedIn(!isSignedIn);

    // Reset error message
    setErrorMessage(null);

    // Reset input fields
    email.current.value = "";
    password.current.value = "";
    if (name.current) {
      name.current.value = "";
    }
  };

  return (
    <div
      className='relative w-full h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <Header />
      <div className='absolute inset-0 bg-black bg-opacity-50 z-0'></div>
      <div className='relative flex items-center justify-center h-full z-10'>
        <div className='w-full max-w-md p-8 bg-[#0D3FA9] bg-opacity-50 rounded-md text-white'>
          <h1 className='text-2xl font-bold mb-2 text-center'>
            {isSignedIn ? "Weclome to Blockbuster" : "Be part of Blockbuster"}
          </h1>
          <h4 className='text-md font-thin mb-6 text-center'>
            {isSignedIn ? "Sign in to continue" : "Sign up today"}
          </h4>
          <form onSubmit={(e) => e.preventDefault()} className='space-y-4'>
            {!isSignedIn && (
              <input
                ref={name}
                type='text'
                placeholder='Name'
                className='w-full p-3 bg-[#0D3FA9] rounded-md focus:outline-none'
              />
            )}
            <input
              ref={email}
              type='email'
              placeholder='Email'
              className='w-full p-3 bg-[#0D3FA9] rounded-md focus:outline-none'
            />
            <input
              ref={password}
              type='password'
              placeholder='Password'
              className='w-full p-3 bg-[#0D3FA9] rounded-md focus:outline-none'
            />
            <p className='text-red-500 text-center text-sm'>{errMessage}</p>
            <button
              onClick={handleButtonClick}
              disabled={isLoadingForm}
              className={`w-full p-3 rounded-md transition ${
                isLoadingForm
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#FFA900] hover:bg-yellow-600"
              }`}
            >
              {isLoadingForm
                ? isSignedIn
                  ? "Signing In..."
                  : "Signing Up..."
                : isSignedIn
                ? "Sign In"
                : "Sign Up"}
            </button>
          </form>
          <p className='text-center text-sm mt-4'>
            {isSignedIn ? (
              <>
                Are you new here?{" "}
                <span
                  onClick={switchAuthForm}
                  className='font-bold cursor-pointer'
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already a user?{" "}
                <span
                  onClick={switchAuthForm}
                  className='font-bold cursor-pointer'
                >
                  Sign In
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
