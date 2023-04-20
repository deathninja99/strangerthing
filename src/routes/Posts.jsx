import { FetchPosts } from "../api/fetchapi";
import { useEffect, useState } from "react";
export async function Post() {
  const [posts, setposts] = useState();
  FetchPosts();
  console.log(posts);
  return;
  useEffect(() => {
    posts.map((post) => <div key={post.id}> </div>);
  }, []);
}
