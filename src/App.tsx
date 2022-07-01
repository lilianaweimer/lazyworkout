import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Reps from "./components/Reps/Reps";

import data from "./resources/data";

import { Exercise, FocusAreas } from "./resources/data";

export type Equipment = "pilates ring" | "weights";
export type Difficulty = "easy" | "medium" | "hard";

export interface Settings {
  currentFocusAreas: FocusAreas[];
  currentEquipment: Equipment[];
  currentDifficulty: Difficulty;
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
    currentDifficulty: "easy",
  };

  const [exerciseData, setExerciseData] = useState(data);

  const [settings, updateSettings] = useState(defaultSettings);
  console.log("settings", settings);

  const [currentExercises, updateCurrentExercises] = useState(data);

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
      />
      <Reps />
    </div>
  );
}

export default App;
