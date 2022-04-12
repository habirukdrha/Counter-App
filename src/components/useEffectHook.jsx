import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        // console.log(response.data);
        setPost(response.data[0].email);
        console.log("API called");
      });
  }, []);

  return (
    <main className="container">
      <h4>Use Effect State</h4>
      {post}
    </main>
  );
};

export default UseEffect;
