import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashbaordlayout from "./layouts/Dashbaordlayout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import "./App.scss";
import useStore from "./store/useStore";
import { getPosts, getUsers } from "./api";

function App() {
  const { posts, users, setPosts, setUsers } = useStore();

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      const [postsResponse, usersResponse] = await Promise.all([
        getPosts(),
        getUsers(),
      ]);
      setPosts(postsResponse.data);
      setUsers(usersResponse.data);
    };
    fetchPostsAndUsers();
  }, [setPosts, setUsers]);
  return (
    <Router>
      <Dashbaordlayout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/users" Component={Users} />
          <Route path="/users/:id" Component={User} />
          <Route path="/posts" Component={Posts} />
          <Route path="/posts/:id" Component={Post} />
        </Routes>
      </Dashbaordlayout>
    </Router>
  );
}

export default App;
