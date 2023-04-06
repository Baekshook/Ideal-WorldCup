import React, { useEffect, useState } from "react";
import animalData from "../animalData.json";
import AnimalCard from "../components/AnimalCard";

export default function Worldcup() {
  const [shuffleAnimal, setShuffleAnimal] = useState();

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5; // 1일 경우 배열 순서대로 출력, -1일 경우 배열 역순으로 출력, Math.random은 0~1 출력 but 0,5를 빼면 -0.5~0.5으로 랜덤 출력 가능
    });
    setShuffleAnimal(shuffleAnimalData);
  }, []);
  // sort 함수 - map 함수와 비슷 (sort는 배열 정렬할때 많이 사용)

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {/* <AnimalCard animal={shuffleAnimal[7]} /> * 이 코드로 했을 시는 useState 초기 값에 빈배열 추가/ } 
      {/* {shuffleAnimal ? <AnimalCard animal={shuffleAnimal[0]} /> : "값이없음"} */}
      {shuffleAnimal && <AnimalCard animal={shuffleAnimal[0]} />}
    </div>
  );
}
