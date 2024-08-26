import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          console.log(firebaseUser);
          // const uid = user.uid;
          dispatch(
            addUser({
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              id: firebaseUser.uid,
              photoURL: firebaseUser.photoURL,
            })
          );
          navigate("/browse");

          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
        }
      });
    };
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="w-full absolute  z-10 px-4 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix Logo"
      />

      {user.email && (
        <div className="flex justify-between items-center gap-4">
          <img className="w-12 h-12" src={user?.photoURL} alt="user icon" />
          <button
            onClick={handleSignOut}
            className=" font-bold bg-red-600 rounded-full p-2 text-white"
          >
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
