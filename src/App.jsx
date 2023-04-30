import "./App.css";
import { Userpass } from "./routes/userpass";
import { Routes, Route } from "react-router-dom";
import { FetchPosts } from "./api/fetchapi";
import { Post, Postering } from "./routes/Posts";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "./routes/useAuth";

function logout() {
  const { setToken } = useAuth;
  sessionStorage.clear();
  setToken(null);
}

function App() {
  const { token, setToken } = useAuth();
  FetchPosts();
  // let canada = sessionStorage.token;
  console.log("from app.jsx", token);
  return (
    //nav bar
    <div className="App">
      <div className="nav">
        <Link to="./">home</Link>
        {token ? (
          <div>
            <Link to="./createpost">create post</Link>
            <Link to="./profile">{sessionStorage.username}</Link>
            <button onClick={logout}>log out</button>
          </div>
        ) : (
          <div>
            <Link className="navspace" to="./register">
              register
            </Link>
            <Link className="navspace" to="./login">
              login{" "}
            </Link>
          </div>
        )}
      </div>
      {/* main body */}
      <Routes>
        {/* create post page, view singlepost,  */}
        {/* setcanda as pass into userpass */}
        <Route path="/" element={<Post />}></Route>
        <Route path="/login" element={<Userpass setToken={setToken} />}></Route>
        <Route path="/register" element={<Userpass />}></Route>
        <Route path="/createpost" element={<Postering />}></Route>
      </Routes>
      <footer className="footer">2023 Sass</footer>
    </div>
  );
}

export default App;
