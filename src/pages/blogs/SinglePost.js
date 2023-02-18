import React from "react";
import { useParams } from "react-router-dom";
import { useId } from "../../hooks/useQueries";

const SinglePost = () => {
  const { id } = useParams();

  const { error, data, loading } = useId(id);
  if (error) return <p>{`${error.message}`}</p>;
  if (loading)
    return (
      <h2 className="font-extrabold text-teal-600 text-center  text-4xl     ">
        Loading...{" "}
      </h2>
    );
  // if (data) return console.log(data?.blog_posts[0]?.content);
  if (data)
    return (
      <div className="border-2 bg-stone-300 mx-24 h-full px-3 mt-9 pb-20    ">
        <h2 className="font-bold text-3xl text-teal-800 my-2  ">
          {data?.blog_posts[0]?.category}
        </h2>
        <h2 className="text-3xl  ">{data?.blog_posts[0]?.title}</h2>
        <h2 className=" h-40 mt-2  text-ellipsis break-words  ">
          {data?.blog_posts[0]?.content}
        </h2>
      </div>
    );
};

export default SinglePost;
