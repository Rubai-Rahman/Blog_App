import { useUserData } from "@nhost/react";
import React from "react";
import { useUser } from "../../hooks/useQueries";

const UserPosts = () => {
  const user = useUserData();
  let author_id = user?.displayName;
  console.log(author_id);
  const { error, data, loading } = useUser(author_id);
  if (error) return `${error.message}`;
  if (loading) return <h2>Loading </h2>;
  if (data) return console.log(data?.blog_posts);
  return (
    <div>
      <h2>This Is my Post</h2>
    </div>
  );
};

export default UserPosts;
