import { useEffect, useState } from "react";
import { Settings } from "../../App";
import { Exercise } from "../../resources/data";
import RepItem from "./RepItem";
import "./Reps.scss";

interface RepsProps {
  currentExercises: Exercise[];
  currentSettings: Settings;
}

const Reps: React.FC<RepsProps> = ({ currentExercises, currentSettings }) => {
  let currentExerciseSlice = currentExercises.slice(
    0,
    Number(currentSettings.currentIntensity) * 3
  );

  const getRandomInteger = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const reps = currentExerciseSlice.map((exercise) => {
    let numOfReps;
    if (currentSettings.currentIntensity === "1") {
      numOfReps = getRandomInteger(exercise.easyReps[0], exercise.easyReps[1]);
    } else if (currentSettings.currentIntensity === "2") {
      numOfReps = getRandomInteger(exercise.medReps[0], exercise.medReps[1]);
    } else {
      numOfReps = getRandomInteger(exercise.hardReps[0], exercise.hardReps[1]);
    }
    return exercise.isTimed ? (
      <RepItem isTimed={true} numOfReps={numOfReps} exercise={exercise} />
    ) : (
      <RepItem isTimed={false} numOfReps={numOfReps} exercise={exercise} />
    );
  });

  return (
    <section className="page_section" id="reps">
      <h2>Reps</h2>
      <div className="reps_container">{reps}</div>
    </section>
  );
};

export default Reps;
