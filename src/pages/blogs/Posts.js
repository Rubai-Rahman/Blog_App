import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../../hooks/useQueries";
import Post from "./Post";

const Posts = () => {
  const { error, data, loading } = useQuery(GET_POSTS);

  if (error) return (`${error.message}`);
  if (loading) return <h3>Loading</h3>;
  if (data) 
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {data?.blog_posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
