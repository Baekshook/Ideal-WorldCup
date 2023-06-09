import React, { useEffect, useState } from "react";
import animalData from "../animalData.json";
import AnimalCard from "../components/AnimalCard";
import WinAnimalCard from "../components/WinAnimalCard";

export default function Worldcup() {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(16);

  const onClickChoice = (v) => () => {
    setChoice(choice + 2); // 0번 1번이 처음에 나오면 그 다음은 2,3번이 나와야하므로 +2
    setNextRound([...nextRound, v]); // react에서의 push 기능 (...문법)
  };

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5; // 1일 경우 배열 순서대로 출력, -1일 경우 배열 역순으로 출력, Math.random은 0~1 출력 but 0,5를 빼면 -0.5~0.5으로 랜덤 출력 가능
    });
    setShuffleAnimal(shuffleAnimalData);
  }, []);
  // sort 함수 - map 함수와 비슷 (sort는 배열 정렬할때 많이 사용)

  //   useEffect(() => console.log(nextRound), [nextRound]);

  useEffect(() => {
    if (choice === end) {
      setShuffleAnimal(nextRound); // 1. nextRound에 담긴 동물들을 shuffleAnimal로 옮긴다.
      setNextRound([]); // 2. nextRound 초기화 []
      setEnd(end / 2);
      setChoice(0); // 3. 16강 -> 8강 -> choice 0
    }
  }, [choice]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {/* {shuffleAnimal ? <AnimalCard animal={shuffleAnimal[0]} /> : "값이없음"} */}
      {/* <AnimalCard animal={shuffleAnimal[0]} />
      <div className="text-2xl mx-8 font-bold">VS</div>
      <AnimalCard animal={shuffleAnimal[1]} /> 이 코드로 했을 시는 useState 초기 값에 빈배열 추가 */}
      {shuffleAnimal &&
        (end === 1 ? (
          <WinAnimalCard animal={shuffleAnimal[choice]} />
        ) : (
          <>
            <AnimalCard
              animal={shuffleAnimal[choice]}
              choice={choice}
              onClickChoice={onClickChoice}
            />
            <div className="text-2xl mx-8 font-bold">
              <div>{`${end === 2 ? "결승" : end + "강"}`}</div>
              <div>VS</div>
            </div>
            <AnimalCard
              animal={shuffleAnimal[choice + 1]}
              choice={choice + 1}
              onClickChoice={onClickChoice}
            />
          </>
        ))}
    </div>
  );
}
