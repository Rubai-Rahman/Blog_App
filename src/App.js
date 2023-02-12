import { NhostClient, NhostProvider } from "@nhost/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./pages/blogs/CreatePost";
import SinglePost from "./pages/blogs/SinglePost";
import UserPosts from "./pages/blogs/UserPosts";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,
});
function App() {
  return (
    <NhostProvider nhost={nhost}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />

          <Route path="sign-in" element={<SignIn />} />
          <Route path="/:id" element={<SinglePost />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/createPost"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/userPost"
            element={
              <ProtectedRoute>
                <UserPosts />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </NhostProvider>
  );
}

export default App;
