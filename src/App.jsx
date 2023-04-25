import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FetchPosts } from "./api/fetchapi";
import { Post } from "./routes/Posts";
import profile from "./routes/profile";
import { loginpage, singup } from "./routes/register";

function App() {
  FetchPosts();
  return (
    //nav bar
    <div className="App">
      <div className="nav">
        <a href="./">home</a>
        <a href=""></a>
        <a href="">profile</a>
        <a href="./login">login</a>
      </div>
      {/* main body */}
      <Routes>
        {/* create post page, view all posts,  */}
        <Route path="/profile" element={<profile />}></Route>
        <Route path="/" element={<Post />}></Route>
        <Route path="/login" element={<loginpage></loginpage>}></Route>
        <Route path="/:id" element={<></>}></Route>
      </Routes>
      <footer className="footer">2023 Sass</footer>
    </div>
  );
}

export default App;
