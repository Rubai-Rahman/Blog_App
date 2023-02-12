import { gql } from "@apollo/client";

export const INSERT_BLOG_POST = gql`
  mutation InsertBlogPost($title: String!, $content: String! ,$category:String!,$author_id:String!) {
    insert_blog_posts_one(object: { title: $title, content: $content,category:$category,author_id:$author_id }) {
      id
      is_published
      date
    }
  }
`;
