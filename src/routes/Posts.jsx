import { FetchPosts } from "../api/fetchapi";
import { useEffect, useState } from "react";
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
                console.log(posts.data);
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
