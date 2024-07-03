import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import PostCard from "../components/PostCard";
import { getPosts } from "../api";
import { GrDiamond } from "react-icons/gr";
import PostsList from "../components/PostsList";
import { useState } from "react";

function Home() {
  const { posts, users } = useStore();
  const [search, setSearch] = useState("");
  const [fetchedPosts, setFetchedPost] = useState([]);

  useEffect(() => {
    setFetchedPost(posts);
  }, [posts]);

  const onSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    if (!val) {
      setFetchedPost(posts);
      return;
    }
    const filteredPosts = posts.filter((post) => {
      return post.userInfo.name.includes(val);
    });
    // console.log(val, filteredPosts.length, posts);
    setFetchedPost(filteredPosts);
  };

  return (
    <div className="">
      <div className="fixed top-0 right-0 bg-gray-800 w-full topbar z-[1000]">
        <div className="flex">
          <div className="grid grid-cols-4 gap-4   ">
            <StatsCard title="Users" to={"/users"} value={users.length} />
            <StatsCard title="Posts" to={"/posts"} value={posts.length} />
          </div>
          <div className="flex justify-center items-center">
            <input
              value={search}
              onChange={onSearchChange}
              className="px-4 py-4 rounded-md w-full mx-4 text-black"
            />
            <button className="rounded-md bg-blue-600 p-4">Search</button>
          </div>
        </div>
      </div>
      <div className="pt-36">
        <PostsList posts={fetchedPosts} />
      </div>
    </div>
  );
}

export default Home;

const StatsCard = ({ title, value, to }) => {
  return (
    <Link to={to}>
      <div className="bg-gray-800  rounded-md m-0 text-center py-4 gap-3 font-bold flex justify-center items-center">
        <h4 className="py-4 text-red-500 text-3xl">{title}</h4>
        <p className="text-2xl"> {`  ${value}`}</p>
      </div>
    </Link>
  );
};
