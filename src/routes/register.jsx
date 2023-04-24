import React from "react";
import { useState } from "react";
import { registeruser, login } from "../api/fetchapi";

export function loginpage() {
  function handlesubmit(e) {
    e.preventdefault();
  }
  const form = e.target;
  const formData = new FormData(form);
  //use usestate() for both username and password
  //
  const [loginuser1, setloginuser1] = useState("");
  const [loginpass1, setloginpass1] = useState("");
  return (
    // login form
    <form>
      <h1>Login!</h1>;
      <input onChange={setloginuser1} type="text" placeholder="username" />;
      <input onChange={setloginpass1} type="text" placeholder="password" />;
      <button
        onSubmit={() => {
          login(loginuser1, loginpass1);
        }}
      >
        login!
      </button>
      ;
    </form>
  );
}

export function singup() {
  const [signupuser, setsignupuser] = useState("");
  const [signuppass, setsignuppass] = useState("");
  return (
    // sign up form
    <form>
      <h1>sign up!</h1>;
      <input onChange={setsignupuser} type="text" placeholder="username" />;
      <input onChange={setsignuppass} type="text" placeholder="password" />;
      <button
        onSubmit={() => {
          registeruser(signupuser, signuppass);
        }}
      >
        sign up!
      </button>
      ;
    </form>
  );
}
