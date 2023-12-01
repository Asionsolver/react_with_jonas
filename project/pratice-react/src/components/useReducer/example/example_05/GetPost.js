import React, { useEffect, useState } from "react";

export default function GetPost() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [post, setPost] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("There is a Problem");
      });
  },[]);
  return (
    <div>
        {loading ?  "Loading....": post.body}
        {error? error : null}
    </div>
  );
}
