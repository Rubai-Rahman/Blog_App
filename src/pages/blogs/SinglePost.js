import React from "react";
import { useParams } from "react-router-dom";
import { useId } from "../../hooks/useQueries";

const SinglePost = () => {
  const { id } = useParams();

  const { error, data, loading } = useId(id);
  if (error) return console.log(`${error.message}`);
  if (loading) return <h3>Loading</h3>;
  // if (data) return console.log(data?.blog_posts[0]?.content);
if(data)
  return (
    <div>
      <h2>{data?.blog_posts[0]?.title}</h2>
      <h2>{data?.blog_posts[0]?.content}</h2>
     
    </div>
  );
};

export default SinglePost;
