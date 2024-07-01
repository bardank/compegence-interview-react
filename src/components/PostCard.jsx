import React from "react";
import { Link } from "react-router-dom";
import useStore from "../store/useStore";
import { FaUser } from "react-icons/fa";
import InfoItem from "./InfoItem";

const PostCard = ({ post }) => {
  const { users } = useStore();

  const user = users.find((user) => user.id === post.userId);

  return (
    <Link to={`/posts/${post.id}`}>
      <div className="bg-gray-800 p-4 m-4  rounded-md shadow-lg cursor-pointer hover:scale-105 transition duration-200 ease-in-out">
        <h1 className="text-2xl">{post.title}</h1>
        <p className="text-gray-100 font-light py-2">{post.body}</p>
        <p className="text-xs font-light text-gray-300">
          Post Id <span>{post.id}</span>
        </p>
        {user && (
          <>
            <Link to={`/users/${post.userId}`}>
              <InfoItem icon={<FaUser />} value={user.name} />
            </Link>
          </>
        )}
      </div>
    </Link>
  );
};

export default PostCard;
