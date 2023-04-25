import { singlepost } from "../api/fetchapi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

let postid = useParams();

export function Singleposting() {
  //get posts and set them with usestate
  const [posts, setposts] = useState([]);
  useEffect(() => {
    async function getp() {
      const watermellon = await singlepost(postid);
      setposts(watermellon);
    }
    getp();
  }, [postid]);
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
