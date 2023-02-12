import { gql } from "@apollo/client";

export const INSERT_BLOG_POST = gql`
  mutation InsertBlogPost($title: String!, $content: String!) {
    insert_blog_post_one(object: { title: $title, content: $content }) {
      id
    }
  }
`;
