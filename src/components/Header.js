import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGPTSearchView } from "../store/gptSlice";

import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import GPTSearch from "./GPTSearch";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGPTSearchTrue = useSelector((store) => store.gpt.showGPTSearch);
  //console.log(user);
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          //console.log(firebaseUser);
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
  }, [dispatch, navigate]);

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
  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };
  return (
    <div className="w-full absolute top-0 left-0 z-20 px-4 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={LOGO} alt="Netflix Logo" />
      {user.email && (
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={handleGPTSearchClick}
            className="bg-purple-400 text-white rounded-lg px-4 py-2 mx-4 my-2"
          >
            {isGPTSearchTrue ? <span> GPTSearch </span> : <span>Home</span>}
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="user icon" />
          <button
            onClick={handleSignOut}
            className=" font-bold bg-red-800 rounded-lg p-2 text-white"
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
