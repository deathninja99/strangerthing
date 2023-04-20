import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FetchPosts } from "./api/fetchapi";
import { Post } from "./routes/Posts";

function App() {
  const [count, setCount] = useState(0);
  FetchPosts();
  return (
    //i thought it would be simplest to
    <div className="App">
      <div className="nav">
        <div>home</div>
        <div>Posts</div>
        <div>Profile</div>
      </div>
      <Routes>
        <Route path="/" element={Post}></Route>
      </Routes>
      <footer className="footer">2023 Sass</footer>
    </div>
  );
}

export default App;
