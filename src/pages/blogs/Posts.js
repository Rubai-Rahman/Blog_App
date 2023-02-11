import React from "react";
import { useQuery, gql } from "@apollo/client";
const GET_POSTS = gql`
  query {
    blogs_content {
      id
      tittle
      content
      author_id
    }
  }
`;
const Posts = () => {
  const { error, data, loading } = useQuery(GET_POSTS);
  console.log(error, loading, data);

  return <div></div>;
};

export default Posts;
