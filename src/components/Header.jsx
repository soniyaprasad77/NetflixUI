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
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const user = useSelector((store) => store.user);

  const isGeminiSearchTrue = useSelector(
    (store) => store.gemini.showGeminiSearch
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(
          addUser({
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            id: firebaseUser.uid,
            photoURL: firebaseUser.photoURL,
          })
        );
        if (location.pathname === "/") {
          navigate("/browse");
        }

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
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
    <div className='w-full absolute top-0 left-0 z-20 px-4 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img className=' w-20 md:w-36 z-10' src={LOGO} alt=' Logo' />
      {user.email && (
        <div className='flex justify-between items-center gap-4'>
          {!isGeminiSearchTrue && (
            <select
              onClick={handleLanguageChange}
              className='p-2 bg-slate-600 text-white hidden md:block'
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <Link
            to={!isGeminiSearchTrue ? "/browse" : "/search"}
            onClick={handleGeminiSearchClick}
            className='bg-[#0D3FA9] text-[#FFA900] font-bold rounded-lg text-xs md:text-lg px-3 py-1 md:px-4 md:py-2 md:my-2 md:mr-4'
          >
            {!isGeminiSearchTrue ? <span>Home</span> : <span>Search</span>}
          </Link>
          <img
            className='w-12 h-12 hidden md:block'
            src={user?.photoURL}
            alt='user icon'
          />
          <button
            onClick={handleSignOut}
            className=' text-xs md:text-lg font-bold rounded-lg text-white whitespace-nowrap'
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
