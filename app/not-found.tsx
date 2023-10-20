import React from "react";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div
      style={{ color: "white" }}
      className="flex flex-col justify-center align-middle  h-[80vh] text-center"
    >
      <p className="font-bold text-6xl capitalize text-blue-800 mt-10"> 404</p>
      <p className="font-bold text-2xl capitalize  text-slate-500 mt-7">
        sorry page not found
      </p>
    </div>
  );
};

export default NotFound;
