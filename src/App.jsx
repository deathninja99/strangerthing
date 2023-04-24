import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FetchPosts } from "./api/fetchapi";
import { Post } from "./routes/Posts";
import profile from "./routes/profile";
function App() {
  //this is where token should reside... idk if it should be one higher, but we will see
  let token = localStorage.getItem("token");
  console.log("token", token);
  FetchPosts();
  return (
    //nav bar
    <div className="App">
      <div className="nav">
        <div>Home</div>
        <div>Posts</div>
        <div {token ? profile : login/sinup }></div>
      </div>
      {/* navbar */}
      <Routes>
        <Route path="/profile" element={<profile />}></Route>
        <Route path="/" element={<Post />}></Route>
      </Routes>
      <footer className="footer">2023 Sass</footer>
    </div>
  );
}

export default App;
