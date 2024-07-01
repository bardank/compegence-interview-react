import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../api";
import InfoItem from "../components/InfoItem";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { MdOutlineFactory } from "react-icons/md";

const User = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, [id]);

  const loadUser = async () => {
    try {
      const response = await getUser(id);
      console.log(response.data);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      setUser(null);
      setLoading(false);
    }
  };
  console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
  return (
    <div className="bg-gray-800  rounded-md">
      <div className="p-8">
        <h1 className="text-4xl text-white my-4 text-center">User Info</h1>
        {loading && <p>Loading...</p>}
        {!loading && user && (
          <div className="text-white">
            <h1 className="text-xl font-bold">{user.name}</h1>
            <div className="text-gray-400 flex justify-center flex-col">
              <InfoItem icon={"id"} value={user.id} />
              <InfoItem icon={"Username"} value={user.username} />
              <InfoItem icon={"ZipCode"} value={user.address.zipcode} />
              <InfoItem icon={<FaPhone />} value={user.phone} />
              <InfoItem icon={<HiOutlineMail />} value={user.email} />
              <InfoItem
                icon={<MdOutlineLocationOn />}
                value={`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
              />
              <a
                href={`https://www.${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InfoItem icon={<TbWorld />} value={user.website} />
              </a>
              <div className="mt-6">
                <InfoItem
                  icon={<MdOutlineFactory />}
                  value={<p className="font-semibold">Company Info</p>}
                />
                <InfoItem icon={"Name:"} value={user.company.name} />
                <InfoItem
                  icon={"Catch Phrase:"}
                  value={user.company.catchPhrase}
                />
                <InfoItem icon={"BS:"} value={user.company.bs} />
              </div>
            </div>
            <iframe
              className="h-80 w-full mt-4 rounded-lg"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&q=${user.address.geo.lat},${user.address.geo.lng}`}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
