import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Users",
    path: "/users",
  },
  {
    name: "Posts",
    path: "/posts",
  },
];

const Dashbaordlayout = (props) => {
  return (
    <div className="flex">
      <div className=" h-screen bg-gray-800 text-white flex items-center flex-col sidebar fixed sidebar">
        <h1 className="text-xl font-bold mt-6 text-red-500 uppercase cursor-default">
          Dashboard
        </h1>
        <ul className="mt-4">
          {navItems.map((item, i) => (
            <li
              className="font-semibold text-xl w-full text-center flex justify-center py-2 cursor-pointer "
              key={i}
            >
              <h1 className=" w-full hover:text-red-500">
                <Link to={item.path}>{item.name}</Link>
              </h1>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full bg-gray-900 text-white flex items-center justify-center  main-content">
        <div className=" text-white w-full h-full p-8">{props.children}</div>
      </div>
    </div>
  );
};

export default Dashbaordlayout;

