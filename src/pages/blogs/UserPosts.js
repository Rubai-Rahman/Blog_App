import { useUserData } from "@nhost/react";
import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useQueries";
import UserSinglePost from "./UserSinglePost";

const UserPosts = () => {
  const user = useUserData();
  let author_id = user?.displayName;

  const { error, data, loading } = useUser(author_id);
  if (error) return `${error.message}`;
  if (loading)
    return (
      <h2 className="font-extrabold text-teal-600 text-center  text-4xl     ">
        Loading...{" "}
      </h2>
    );
  if (data)
 
    return (
      <div>
        <div className="grid grid-cols-4 gap-4 px-8 bg-slate-400  ">
          {data?.blog_posts.map((post) => (
              <UserSinglePost key={post.id} post={post} />
            ))}
        </div>
        <h3>why not </h3>
      </div>
    );
};

export default UserPosts;
