
import React, { useState } from "react";
import Posts from "../blogs/Posts";

const Home = () => {
  const [search, setSearch] = useState("");
  
  return (
    <div>
      <div className=" bg-teal-300 w-full h-96  ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className=" justify-center mt-36 ml-60  w-96 h-12 outline-none pl-2     "
          type="text"
          placeholder=" Search "
        />
        <button className=" m-5 ring-2 ring-teal-800 rounded-md w-40 h-12 text-2xl font-serif text-center  ">
          {" "}
          search
        </button>
      </div>
      <Posts search={search} />
    </div>
  );
};

export default Home;
