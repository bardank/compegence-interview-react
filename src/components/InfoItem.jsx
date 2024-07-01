import React from "react";

const InfoItem = ({ icon, value, className = " " }) => {
  return (
    <div className={`text-gray-400 flex items-center ${className}`}>
      {icon}
      <p className="mx-4">{value}</p>
    </div>
  );
};
export default InfoItem;
