import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import PostCard from "./PostCard";
import { getPosts } from "../api";

function PostsList({ posts }) {
  return (
    <div className="">
      <h1 className="text-4xl">Posts </h1>
      <div className="flex flex-col ">
        {posts.map((post, i) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;
