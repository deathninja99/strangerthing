import React from "react";
import { useState } from "react";
import { registeruser, login } from "../api/fetchapi";
import { useLocation } from "react-router-dom";

export function Userpass() {
  let location = useLocation();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  // login form
  return (
    <>
      <form className="form">
        <h1>{location.pathname.substring(1)}</h1>
        <input
          className="inputspace"
          onChange={setusername}
          type="text"
          placeholder="username"
        />
        <input
          className="inputspace"
          onChange={setpassword}
          type="text"
          placeholder="password"
        />
        <button
          onSubmit={() => {
            console.log("username: ", username, " password: " + password);
            if (location === "./login") {
              login(username, password);
            } else {
              registeruser(username, password);
            }
          }}
        >
          {location.pathname.substring(1)}
        </button>
      </form>
    </>
  );
}
