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
          <Link
            className="outline outline-offset-4 rounded-sm outline-teal-300 bg-transparent   "
            onClick={signOut}
          >
            Logout
          </Link>
        ) : (
          <Link
            className="outline outline-offset-4 rounded-sm outline-teal-300 bg-transparent   "
            to="/sign-in"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
