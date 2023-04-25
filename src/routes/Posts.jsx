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
      {posts.map((post) => (
        <>
          <div className="card">
            <div className="cardtext" key={post._id} id={post._id}>
              {post.title}{" "}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
