import React from "react";
import { useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {

  const [isSignInFrom, setIsSignInForm] = React.useState(true);
  const [validationError, setValidationError] = React.useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const validationError = checkValidData(email.current.value, password.current.value);
    setValidationError(validationError);
  }

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="fixed inset-0 -z-10">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
          alt="Netflix Background Img"
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="absolute top-1/2 left-1/2 flex w-80 -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded bg-black/75 px-8 pt-3 pb-8">
        <h1 className="py-1 text-3xl font-bold text-white">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>

        {isSignInFrom || (
          <input 
            ref = {name}
            className="rounded bg-gray-700 p-3 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref = {email}
          className="rounded bg-gray-700 p-3 text-white"
          type="text"
          placeholder="Email or phone number"
        />

        <input
          ref = {password}
          className="rounded bg-gray-700 p-3 text-white"
          type="password"
          placeholder="Password"
        />
       
       <p className="text-red-500">{validationError}</p>

        <button className="rounded bg-red-600 p-3 text-white" type="submit" onClick={handleButtonClick}>
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-300">
          <a className="text-blue-500 hover:underline text-10px" href="#" onClick={toggleSignInForm}>
            {isSignInFrom ? "New to Netflix? Sign Up now." : "Already have an account? Sign In now."}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
