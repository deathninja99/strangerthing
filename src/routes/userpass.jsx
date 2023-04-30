import React from "react";
import { registeruser, login } from "../api/fetchapi";
import { useLocation } from "react-router-dom";
import useAuth from "./useAuth";

export function Userpass() {
  const { settoken, token } = useAuth();
  try {
    let location = useLocation();
    // login form
    return (
      <>
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const values = Object.fromEntries(formData.entries());
            if (location.pathname == "/login") {
              login(values.username, values.username);
            } else {
              registeruser(values.username, values.username);
            }
          }}
        >
          <h1>{location.pathname.substring(1)}</h1>
          <input
            className="inputspace"
            name="username"
            type="text"
            placeholder="username"
          />
          <input
            className="inputspace"
            name="password"
            type="text"
            placeholder="password"
          />

          <button type="submit">{location.pathname.substring(1)}</button>
        </form>
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
