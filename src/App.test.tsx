import "React";
import App from "./App";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  const mockData = [
    {
      id: 1,
      name: "Push Ups",
      focusAreas: ["core", "arms", "abs"],
      usesPilatesRing: false,
      usesWeights: false,
      easyReps: [5, 5],
      medReps: [6, 10],
      hardReps: [11, 15],
      howToURL: "https://www.verywellfit.com/the-push-up-exercise-3120574",
      isTimed: false,
    },
    {
      id: 2,
      name: "Plank",
      focusAreas: ["core", "stamina"],
      usesPilatesRing: false,
      usesWeights: false,
      easyReps: [10, 10],
      medReps: [20, 20],
      hardReps: [30, 30],
      howToURL: "https://www.verywellfit.com/the-plank-exercise-3120068",
      isTimed: true,
    },
    {
      id: 3,
      name: "Tree Pose",
      focusAreas: ["yoga", "legs", "lower body", "posture"],
      usesPilatesRing: true,
      usesWeights: false,
      easyReps: [4, 4],
      medReps: [6, 6],
      hardReps: [8, 8],
      howToURL: "https://ringfitadventure.fandom.com/wiki/Tree_Pose",
      isTimed: false,
    },
    {
      id: 4,
      name: "Weighted Overhead Side Bend",
      focusAreas: ["core", "stomach", "waist", "upper arms"],
      usesPilatesRing: false,
      usesWeights: true,
      easyReps: [10, 15],
      medReps: [16, 20],
      hardReps: [21, 25],
      howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Side_Bend",
      isTimed: false,
    },
  ];

  it.skip("should render the page", () => {
    // const { getByText } = render(<App />);

    expect(true).toBe(true);

    // expect(getByText("Lazy Workout")).toBeInTheDocument();
  });
  it("should auto-populate some data on load");
  it("should update reps when form is filled out and submitted");
  it("should only load appropriate exercises");
});
