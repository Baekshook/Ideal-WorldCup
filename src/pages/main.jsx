import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="bg-pink-300 min-h-screen flex flex-col justify-center items-center">
      <div className="text-6xl font-bold">이상형 월드컵</div>
      <Link to="/worldcup">
        <button className=" bg-pink-400 text-white px-4 py-2 rounded-lg mt-8">
          시작
        </button>
      </Link>
    </div>
  );
}
