import React from "react";
import InfoItem from "../components/InfoItem";
import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import useStore from "../store/useStore";
import { Link } from "react-router-dom";

const CommentItem = ({ comment }) => {
  const { users } = useStore();
  const user = users.find((user) => user.email === comment.email);

  return (
    <div className="bg-gray-800 p-4 m-4  rounded-md shadow-lg cursor-default ">
      <p className="text-xs font-light text-gray-300">
        Comment Id <span>{comment.id}</span>
      </p>
      <p className="text-gray-100 font-light py-2">{comment.body}</p>
      <InfoItem icon={<HiOutlineMail />} value={comment.email} />
      <InfoItem icon={<FaUser />} value={comment.name} />
    </div>
  );
};

export default CommentItem;
