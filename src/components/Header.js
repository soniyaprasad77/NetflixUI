import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGeminiSearchView } from "../store/geminiSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { changeLanguage } from "../store/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGeminiSearchTrue = useSelector((store) => store.gemini.showGeminiSearch);
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
  const handleGeminiSearchClick = () => {
    dispatch(toggleGeminiSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="w-full absolute top-0 left-0 z-20 px-4 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={LOGO} alt=" Logo" />
      {user.email && (
        <div className="flex justify-between items-center gap-4">
          {!isGeminiSearchTrue && (
            <select
              onClick={handleLanguageChange}
              className="p-2 bg-slate-600 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                //console.log(lang.identifier);
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            onClick={handleGeminiSearchClick}
            className="bg-[#0D3FA9] text-[#FFA900] font-bold rounded-lg px-4 py-2 my-2 mr-4"
          >
            {isGeminiSearchTrue ? <span> Search </span> : <span>Home</span>}
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="user icon" />
          <button
            onClick={handleSignOut}
            className=" font-bold rounded-lg text-white"
          >
            {" ( "}
            Sign Out
            {" ) "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
