import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = () => api.get("/posts");
export const getUsers = () => api.get("/users");
export const getUser = (id) => api.get(`/users/${id}`);
export const getComments = (postId) => api.get(`/posts/${postId}/comments`);
export const getPost = (postId) => api.get(`/posts/${postId}`);
