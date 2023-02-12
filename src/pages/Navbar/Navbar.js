import { useAuthenticationStatus, useSignOut } from "@nhost/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated } = useAuthenticationStatus();
    const { signOut } = useSignOut();

  return (
    <div className="outline-1 shadow-2xl p-8 text-4xl font-semibold text-teal-700 flex justify-between   ">
      <div>
        <Link to="/"> Blogs</Link>
      </div>
      <div className="flex justify-between gap-12">
        <Link to="/userPost">My Post</Link>
        <Link to="/createPost">Create A Post</Link>

        {isAuthenticated ? (
          <Link onClick={signOut}>Logout</Link>
        ) : (
          <Link to="/sign-in">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
