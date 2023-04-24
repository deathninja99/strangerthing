import { FetchPosts } from "../api/fetchapi";
import { useEffect, useState } from "react";
export function Post() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    async function getp() {
      const watermellon = await FetchPosts();
      setposts(watermellon);
    }
    getp();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>{post.title} </div>
      ))}
    </div>
  );
}
// supposed to map through every post and create a post id as well as showing each post
// it makes everything disappear and post is undefined...
