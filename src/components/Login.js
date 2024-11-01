import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSign, setIsSign] = useState(true);

  const toggleSignInForm = () => {
    setIsSign(!isSign);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"></img>
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign {isSign ? "In" : "Up"}</h1>
        {!isSign && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg">
          Sign {isSign ? "In" : "Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSign
            ? "New to Netfilx? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
