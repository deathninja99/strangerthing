import { useEffect } from "react";

const cohort = "/2301-ftb-et-web-am";
const BaseURL = "https://strangers-things.herokuapp.com/api";
//fetches all posts... works as intended
export async function FetchPosts() {
  const response = await fetch(`${BaseURL}${cohort}/posts`);
  let Posts = await response.json();
  return Posts.data.posts;
}
export async function singlepost(postid) {
  const response = await fetch(`${BaseURL}${cohort}/posts/${postid}`);
  let posts = await response.json();
  return posts.data.posts;
}
//working on register user
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
    useEffect(() => {
      settoken(token);
    });
    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

//working on login function
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
    console.log(result);
    useEffect(() => {
      settoken(token);
    });
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

// getting user token function
// export async function gettoken(){
//  let tokenresponse = await gettoken();

//  if()
// }
