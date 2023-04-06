import React from "react";

export default function AnimalCard({ animal, choice, onClickChoice }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="border-yellow-300 border-8 shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
      />
      <div className="text-2xl mt-4 font-bold">{animal} 🌸🍀🩵</div>
      <button
        className={`text-2xl mt-4 px-4 py-2 rounded-md ${
          choice % 2 === 0 ? "bg-pink-400" : "bg-violet-400"
        }`}
        onClick={onClickChoice}
      >
        {/* choice가 짝수면 핑크, 홀수면 바이올렛 (worlcup에서 내려준 props) */}
        선택
      </button>
    </div>
  );
}
