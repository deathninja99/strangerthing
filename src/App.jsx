import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { FetchPosts } from "./api/fetchapi";
import { Post } from "./routes/Posts";
import { Singleposting } from "./routes/singlepost";

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
        {/* create post page, view singlepost,  */}
        <Route path="/profile" element={<profile />}></Route>
        <Route path="/" element={<Post />}></Route>
        <Route path="/login" element={<loginpage></loginpage>}></Route>
        <Route path="./:id" element={<Singleposting />}></Route>
      </Routes>
      <footer className="footer">2023 Sass</footer>
    </div>
  );
}

export default App;
