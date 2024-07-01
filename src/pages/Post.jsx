import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost, getComments } from "../api";
import PostCard from "../components/PostCard";
import CommentItem from "../components/CommentItem";
const Post = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      const [postResponse, commentResponse] = await Promise.all([
        getPost(id),
        getComments(id),
      ]);
      setLoading(false);
      setPost(postResponse.data);
      setComment(commentResponse.data);
    } catch (error) {
      setLoading(false);
      setPost(null);
      setComment(null);
    }
  };

  return (
    <div className=" rounded-md">
      <div className="p-8">
        <h1 className="text-4xl text-white my-4 text-center">Post Info</h1>
        {loading && <p>Loading...</p>}
        <div className="">
          {post && <PostCard post={post} className="hover:scale-100" />}
          {comment && (
            <div className="bg-gray-800 p-4 m-4 rounded-md shadow-lg">
              <h4 className="py-4 text-xl">Comments</h4>
              {comment.map((comment, i) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
