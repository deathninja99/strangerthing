import { useState } from "react";

const useAuth = () => {
  const [token, settoken] = useState(sessionStorage.getItem("token"));
  console.log("from useauth: ", token);
  return { token, settoken };
};
export default useAuth;
