import { FetchPosts, makeposting } from "../api/fetchapi";
import { useEffect, useState } from "react";
// gathers all posts and shows them
export function Post() {
  //get posts and set them with usestate
  const [posts, setposts] = useState([]);
  useEffect(() => {
    async function getp() {
      const watermellon = await FetchPosts();
      setposts(watermellon);
    }
    getp();
  }, []);
  return (
    //posts in card format
    <div className="body">
      <h1>Posts</h1>
      {posts.map((post) => (
        <>
          <div
            className="card"
            onClick={() => {
              {
                posts.data;
              }
            }}
          >
            <div className="cardtext" key={post._id} id={post._id}>
              {post.title}
              <br></br>
              {post.description}
              <br />
              {post.author.username}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export function Postering() {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.target;
          const formData = new FormData(form);
          const values = Object.fromEntries(formData.entries());
          console.log(values);
          makeposting();
        }}
      >
        <input type="text" name="title" placeholder="title" />
        <br />
        <input type="text" name="price" placeholder="price" />
        <br />
        <p>will you deliver?</p>
        <input type="checkbox" name="will_deliver" />
        {"checked, for yes, unchecked for no"}
        <br />
        <input type="text" name="description" placeholder="description" />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}

export function singlepost(id) {
  //get posts and set them with usestate
  const [posts, setposts] = useState([]);
  useEffect(() => {
    async function getp() {
      const watermellon = await FetchPosts();
      setposts(watermellon);
    }
    getp();
  }, []);
  return (
    //posts in card format
    <div className="body">
      <h1>Posts</h1>
      {posts.map((post) => (
        <>
          <div
            className="card"
            onClick={() => {
              {
                posts.data;
              }
            }}
          >
            <div className="cardtext" key={post._id} id={post._id}>
              {post.title}
              <br></br>
              {post.description}
              <br />
              {post.author.username}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
