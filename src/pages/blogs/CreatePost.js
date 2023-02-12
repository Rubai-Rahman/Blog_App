import { useMutation } from "@apollo/client";
import { useUserData } from "@nhost/react";
import React from "react";
import { INSERT_BLOG_POST } from "../../hooks/useMutation";

const CreatePost = () => {
  let titleInput, contentInput, categoryInput, author_idInput;
  const user = useUserData();

  author_idInput = user.displayName;
  console.log(titleInput, contentInput, categoryInput, author_idInput);
  const [insertPost] = useMutation(INSERT_BLOG_POST);
  
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          insertPost({
            variables: {
              title: titleInput.value,
              content: contentInput.value,
              category: categoryInput.value,
              author_id: author_idInput,
            },
          });
          titleInput.value = "";
          contentInput.value = "";
        }}
      >
        <h2>Create a new post</h2>

        <input
          type="text"
          placeholder="Enter your title"
          ref={(i) => (titleInput = i)}
        ></input>
        <select name="" id="" ref={(i) => (categoryInput = i)}>
          <option value="News">News</option>
          <option value="Technology">Technology</option>
          <option value="News">Medicine</option>
          <option value="News">Programming</option>
          <option value="News">Environment</option>
          <option value="News">Cars</option>
        </select>

        <textarea
          placeholder="Write your post here..."
          ref={(i) => (contentInput = i)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
