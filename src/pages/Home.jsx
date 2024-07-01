import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import PostCard from "../components/PostCard";
import { getPosts } from "../api";
import { GrDiamond } from "react-icons/gr";
import Posts from "./Posts";

function Home() {
  const { posts, users } = useStore();

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatsCard title="Users" to={"/users"} value={users.length} />
        <StatsCard title="Posts" to={"/posts"} value={posts.length} />
      </div>
      <Posts />
    </div>
  );
}

export default Home;

const StatsCard = ({ title, value, to }) => {
  return (
    <Link to={to}>
      <div className="bg-gray-800  rounded-md shadow-lg m-0 text-center py-4 font-bold">
        <h4 className="py-4 text-red-500 text-3xl">{title}</h4>
        <p className="text-2xl">{value}</p>
      </div>
    </Link>
  );
};
