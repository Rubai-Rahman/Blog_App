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
        <div className="bg-teal-600 justify-between flex flex-col gap-11 align-middle mx-20 px-20 my-8 h-full   ">
          <h2 className="text-3xl text-teal-900 font-semibold  ">
            Create a new post
          </h2>
          <div>
            <input
              className=" w-full h-10 pl-5 "
              type="text"
              placeholder="Enter your title"
              required
              ref={(i) => (titleInput = i)}
            ></input>
          </div>
          <div>
            <select
              className=" w-full h-10 pl-5 "
              name=""
              id=""
              ref={(i) => (categoryInput = i)}
            >
              <option value="News">News</option>
              <option value="Technology">Technology</option>
              <option value="News">Medicine</option>
              <option value="News">Programming</option>
              <option value="News">Environment</option>
              <option value="News">Cars</option>
            </select>
          </div>
          <div>
            <textarea
              required
               className="w-full h-60     "
              placeholder="Write your post here..."
              ref={(i) => (contentInput = i)}
            ></textarea>
                
            <button className="mb-32 outline outline-teal-300 w-36 rounded-sm shadow-sm h-8 text-xl outline-offset-2 bg-teal-700 mt-2   " type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
