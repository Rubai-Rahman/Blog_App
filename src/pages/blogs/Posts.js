import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../../hooks/useQueries";
import Post from "./Post";

const Posts = ({search}) => {
  const { error, data, loading } = useQuery(GET_POSTS);
console.log(search)
  if (error) return `${error.message}`;
  if (loading) return <h3>Loading</h3>;
  if (data)
    return (
      <div className="grid grid-cols-4 gap-4 px-8 bg-slate-400  ">
        {data?.blog_posts?.filter((post) => {
          return search.toLowerCase()===""?post:post.title.toLowerCase().includes(search)
        }).map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
};

export default Posts;
