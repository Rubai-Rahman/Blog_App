import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, content, category, is_published, author_id } = post;

  return (
    <div>
      <h1>{id}</h1>
      <h3>{title}</h3>
      <h4>{category}</h4>
      <p>{content}</p>
      <span>{is_published}</span>
      <span>{author_id}</span>
      <Link to="" >read</Link>
    </div>
  );
};

export default Post;
