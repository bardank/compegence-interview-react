import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import InfoItem from "./InfoItem";
const UserCard = (props) => {
  return (
    <Link to={`/users/${props.user.id}`}>
      <div className="bg-gray-800 p-4 m-4  rounded-md shadow-lg cursor-pointer hover:scale-105 transition duration-200 ease-in-out">
        <h1 className="text-xl font-bold">{props.user.name}</h1>
        <div className="text-gray-400 flex justify-center flex-col">
          <InfoItem icon={"id"} value={props.user.id} />
          <InfoItem icon={"Username"} value={props.user.username} />
          <InfoItem icon={<FaPhone />} value={props.user.phone} />
          <InfoItem icon={<HiOutlineMail />} value={props.user.email} />
          <InfoItem
            icon={<MdOutlineLocationOn />}
            value={props.user.address.city}
          />
        </div>
      </div>
    </Link>
  );
};

export default UserCard;


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
