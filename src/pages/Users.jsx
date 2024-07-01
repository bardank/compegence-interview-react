import React from "react";
import useStore from "../store/useStore";
import { useEffect } from "react";
import UserCard from "../components/UserCard";

const Users = () => {
  const { users } = useStore();
  useEffect(() => {}, []);
  return (
    <div className="">
      <h1 className="text-4xl">Users </h1>
      <div className="grid grid-cols-2 ">
        {users.map((user, i) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
