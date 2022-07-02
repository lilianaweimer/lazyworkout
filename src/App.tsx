import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Reps from "./components/Reps/Reps";

import data from "./resources/data";

import { Exercise, FocusAreas } from "./resources/data";

export type Equipment = "pilates ring" | "weights";
export type Intensity = "1" | "2" | "3";

export interface Settings {
  currentFocusAreas: FocusAreas[];
  currentEquipment: Equipment[];
  currentIntensity: Intensity;
}

function App() {
  const defaultSettings: Settings = {
    currentFocusAreas: [
      "arms",
      "legs",
      "core",
      "yoga",
      "stomach",
      "aerobic",
      "upper arms",
      "chest",
      "shoulders",
      "trapezius",
      "posture",
      "abs",
      "waist",
      "glutes",
      "lower body",
      "stamina",
      "flexibility",
      "back",
    ],
    currentEquipment: [],
    currentIntensity: "1",
  };

  const [exerciseData, setExerciseData] = useState(data);
  const [settings, updateSettings] = useState(defaultSettings);
  const [currentExercises, updateCurrentExercises] = useState(data);

  const shuffle = (array: Exercise[]) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const generateExercises = (settings: Settings, exerciseData: Exercise[]) => {
    let newExercises: Exercise[] = [];
    // add if focus area is included in settings
    settings.currentFocusAreas.forEach((area) => {
      exerciseData.forEach((exercise) => {
        if (
          exercise.focusAreas.includes(area) &&
          !newExercises.includes(exercise)
        ) {
          newExercises.push(exercise);
        }
      });
    });
    // filter by equipment
    if (!settings.currentEquipment.includes("pilates ring")) {
      newExercises = newExercises.filter(
        (exercise) => !exercise.usesPilatesRing
      );
    }
    if (!settings.currentEquipment.includes("weights")) {
      newExercises = newExercises.filter((exercise) => !exercise.usesWeights);
    }
    return shuffle(newExercises);
  };

  useEffect(() => {
    let newExercises = generateExercises(settings, exerciseData);
    updateCurrentExercises(
      (currentExercises) => (currentExercises = newExercises)
    );
  }, []);

  const submitForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    formSettings: Settings
  ) => {
    e.preventDefault();
    let newExercises = generateExercises(formSettings, exerciseData);
    updateSettings((settings) => (settings = formSettings));
    updateCurrentExercises(
      (currentExercises) => (currentExercises = newExercises)
    );
  };

  const focusAreas: FocusAreas[] = [
    "arms",
    "legs",
    "core",
    "yoga",
    "stomach",
    "aerobic",
    "upper arms",
    "chest",
    "shoulders",
    "trapezius",
    "posture",
    "abs",
    "waist",
    "glutes",
    "lower body",
    "stamina",
    "flexibility",
    "back",
  ];

  return (
    <div className="App">
      <Header />
      <Options
        currentSettings={settings}
        updateSettings={updateSettings}
        focusAreas={focusAreas}
        submitForm={submitForm}
      />
      <Reps currentExercises={currentExercises} currentSettings={settings} />
    </div>
  );
}

export default App;
