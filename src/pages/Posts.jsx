import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import PostCard from "../components/PostCard";
import { getPosts } from "../api";
import PostsList from "../components/PostsList";

function Posts() {
  const { posts, setPosts } = useStore();

  return <PostsList posts={posts} />;
}

export default Posts;
