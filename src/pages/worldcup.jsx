import React, { useEffect } from "react";
import animalData from "../animalData.json";

export default function Worldcup() {
  useEffect(() => console.log(animalData), []);
  return <div>Wworldcup</div>;
}
