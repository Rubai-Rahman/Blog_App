//get Post
import { gql, useQuery } from "@apollo/client";

export const GET_POSTS = gql`
  query {
    blog_posts {
      id
      title
      content
      category
      is_published
      author_id
    }
  }
`;
//get Post

//get Post by user
export const GET_POSTS_BY_USER = gql`
  query Get_Post_By_User($author_id: String!) {
    blog_posts(where: { author_id: { _eq: $author_id} }) {
      id
      title
      content
      category
      is_published
    }
  }
`;
export const useUser = (author_id) => {
  const { data, error, loading } = useQuery(GET_POSTS_BY_USER, {
    variables: {
      author_id,
    },
  });
  return {
    data,
    error,
    loading,
  };
};
//Get Post by Id
export const GET_POSTS_BY_Id = gql`
  query Get_Post_By_User($id: Int!) {
    blog_posts(where: { id: { _eq: $id } }) {
     
      title
      content
      category
      is_published
    }
  }
`;
export const useId = (id) => {
  const { data, error, loading } = useQuery(GET_POSTS_BY_Id, {
    variables: {
      id,
    },
  });
  return {
    data,
    error,
    loading,
  };
};