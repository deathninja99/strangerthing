const cohort = "/2301-ftb-et-web-am";
const BaseURL = "https://strangers-things.herokuapp.com/api";

export async function FetchPosts() {
  const response = await fetch(`${BaseURL}${cohort}/posts`);
  let Posts = await response.json();
  console.log(Posts.data.posts);
  return Posts.data.posts;
}
