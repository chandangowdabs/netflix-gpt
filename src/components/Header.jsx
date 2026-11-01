import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Assuming you have a user slice in your Redux store
  const dispatch = useDispatch();

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            }),
          );
          navigate("/browser");
        } else {
          dispatch(removeUser());
          navigate("/login");
        }
      });
      return () => unsubscribe(); // Cleanup the listener on unmount
    }, []);

  const handleSignOut = () => {
    // Implement sign-out logic here
    console.log("Sign out clicked");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="relative z-50 flex h-16 w-full items-center justify-between bg-black px-4 py-2 md:px-8">
      <img
        className="w-34"
        src={Logo}
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-sm object-cover"
            src={user.photoURL}
            alt="User Avatar"
          />

          <button
            onClick={handleSignOut}
            className="ml-4 rounded bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
