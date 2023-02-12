import { useUserData } from "@nhost/react";
import React from "react";
import { useUser } from "../../hooks/useQueries";

const UserPosts = () => {
  const user = useUserData();
  let author_id = user?.displayName;

  const { error, data, loading } = useUser(author_id);
  if (error) return `${error.message}`;
  if (loading) return <h2>Loading </h2>;

  return (
    <div>
      {data?.blogs_post?.map((post) => {
        <p>{post.id}</p>
      })}
      <h2>This Page is My Post</h2>
    </div>
  );
};

export default UserPosts;
