import "./App.css";
import { Userpass } from "./routes/userpass";
import { Routes, Route, useParams } from "react-router-dom";
import { FetchPosts } from "./api/fetchapi";
import { Post } from "./routes/Posts";

import { Link } from "react-router-dom";
function App() {
  FetchPosts();
  return (
    //nav bar
    <div className="App">
      <div className="nav">
        <Link to="./">home</Link>
        <a href="./messages">Messages</a>
        <a href="./profile">profile</a>
        <div>
          <Link className="navspace" to="./register">
            register
          </Link>
          <a href="./login">login</a>
        </div>
      </div>
      {/* main body */}
      <Routes>
        {/* create post page, view singlepost,  */}
        <Route path="/profile" element={<profile />}></Route>
        <Route path="/" element={<Post />}></Route>
        <Route path="/login" element={<Userpass />}></Route>
        <Route path="/register" element={<Userpass />}></Route>
      </Routes>
      <footer className="footer">2023 Sass</footer>
    </div>
  );
}

export default App;
