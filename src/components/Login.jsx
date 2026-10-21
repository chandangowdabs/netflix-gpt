import React from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInFrom, setIsSignInForm] = React.useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
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

      <form className="absolute top-1/2 left-1/2 flex w-80 -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded bg-black/75 px-8 pt-3 pb-8">
        <h1 className="py-1 text-3xl font-bold text-white">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>

        {isSignInFrom || (
          <input 
            className="rounded bg-gray-700 p-3 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          className="rounded bg-gray-700 p-3 text-white"
          type="text"
          placeholder="Email or phone number"
        />

        <input
          className="rounded bg-gray-700 p-3 text-white"
          type="password"
          placeholder="Password"
        />

        <button className="rounded bg-red-600 p-3 text-white" type="submit">
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
