import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
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
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {user && (
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
