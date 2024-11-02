import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSign, setIsSign] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSign(!isSign);
  };

  const handleButtonClick = () => {
    const errorMsg = checkValidData(
      email.current.value,
      password.current.value
    );

    if (errorMsg) {
      setErrorMsg(errorMsg);
      return;
    }

    if (!isSign) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          console.log(userCredential);
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              console.log(auth.currentUser);
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode);
        });
    }
  };

  return (
    <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg')]">
      <Header />

      <div className="flex h-screen justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" m-auto left-0 top-0 w-3/12 p-12 bg-black my-36 text-white bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            Sign {isSign ? "In" : "Up"}
          </h1>
          {!isSign && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
          <p className="text-red-600 text-lg font-bold">{errorMsg}</p>
          <button
            className="p-2 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            Sign {isSign ? "In" : "Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSign
              ? "New to Netfilx? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
