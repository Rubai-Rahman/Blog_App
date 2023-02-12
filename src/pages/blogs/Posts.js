import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS } from "../../hooks/useQueries";
import Post from "./Post";

const Posts = ({search}) => {
  const { error, data, loading } = useQuery(GET_POSTS);
console.log(search)
  if (error) return `${error.message}`;
  if (loading) return (
    <h2 className="font-extrabold text-teal-600 text-center  text-4xl     ">
      Loading...{" "}
    </h2>
  );
  if (data)
    return (
      <div className="grid grid-cols-4 gap-4 px-8 bg-teal-800  ">
        {data?.blog_posts?.filter((post) => {
          return search.toLowerCase() === ""
            ? post
            : post.title.toLowerCase().includes(search) ||
                post.content.toLowerCase().includes(search);
        }).map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
};

export default Posts;
