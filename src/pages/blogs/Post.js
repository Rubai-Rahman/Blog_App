import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, content, category, is_published, author_id } = post;

  return (
    <div className="shadow-2xl shadow-black rounded-md text-center   ">
      <h1>{id}</h1>
      <h3>{title}</h3>
      <h4>{category}</h4>
      <p className="text-ellipsis overflow-hidden">{content}</p>
      <span>{is_published}</span>
      <span>{author_id}</span>
      <Link to={`/${id}`}>read</Link>
    </div>
  );
};

export default Post;
