import { useEffect } from "react";
import useAuth from "../routes/useAuth";

const cohort = "/2301-ftb-et-web-am";
const BaseURL = "https://strangers-things.herokuapp.com/api";
//fetches all posts... works as intended
export async function FetchPosts() {
  const response = await fetch(`${BaseURL}${cohort}/posts`);
  let Posts = await response.json();
  return Posts.data.posts;
}
// idk why i cant get a singlepost to work
export async function singlepost(postid) {
  const response = await fetch(`${BaseURL}${cohort}/posts/${postid}`);
  let posts = await response.json();
  return posts.data.posts;
}
//working register user
export async function registeruser(username, password) {
  try {
    const response = await fetch(`${BaseURL}${cohort}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    });
    const result = await response.json();

    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

//working login function
export async function login(username, password) {
  try {
    const response = await fetch(`${BaseURL}${cohort}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    });
    const result = await response.json();
    maybe(result.data.token);
    sessionStorage.setItem("username", username);
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// make post function
export async function makeposting(title, description, price, willDeliver) {
  try {
    const response = await fetch(`${BaseURL}${cohort}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.token}`,
      },
      body: JSON.stringify({
        post: {
          title: { title },
          description: { description },
          price: { price },
          willDeliver: { willDeliver },
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

//send message function
const postMessage = async (input) => {
  try {
    const response = await fetch(
      `${BASE_URL}/posts/5e8929ddd439160017553e06/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN_STRING_HERE}`,
        },
        body: JSON.stringify({
          message: {
            content: { input },
          },
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

function filter() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function postMatches(post, text) {
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  // then, in our jsx below... map over postsToDisplay instead of posts
}
