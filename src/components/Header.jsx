import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Assuming you have a user slice in your Redux store

  const handleSignOut = () => {
    // Implement sign-out logic here
    console.log("Sign out clicked");
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-linear-to-b from-black/90 to-transparent px-6 py-5 md:px-12">
      <img
        className="w-34"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"
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
