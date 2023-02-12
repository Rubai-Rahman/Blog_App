import React from "react";
import { Link } from "react-router-dom";

const UserSinglePost = ({ post }) => {
  const { id, title, content, category, is_published, author_id } = post;

  return (
    <div className="shadow-2xl shadow-black rounded-md text-center bg-zinc-100   mt-9 p-12  ">
      <h1 className="text-3xl uppercase ">{category}</h1>
      <h3>{title}</h3>
      <p className="text-ellipsis overflow-hidden">{content}</p>
      <span>{author_id}</span>
      <Link className=" pl-7 text-cyan-700 " to={`/${id}`}>
        read...
      </Link>
    </div>
  );
};

export default UserSinglePost;
