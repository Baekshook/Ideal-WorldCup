import React from "react";

export default function AnimalCard({animal}) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`} />
    </div>
  );
}
