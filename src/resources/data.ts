export type FocusAreas =
  | "arms"
  | "legs"
  | "core"
  | "yoga"
  | "stomach"
  | "aerobic"
  | "upper arms"
  | "chest"
  | "shoulders"
  | "trapezius"
  | "posture"
  | "abs"
  | "waist"
  | "glutes"
  | "lower body"
  | "stamina"
  | "flexibility"
  | "back";
// 'focus areas' is not exact -- some of these target back or other areas
// but i am going to lump them together into these categories because it's easier.
// in future iterations i may expand this and make it more 'correct'
export interface Exercise {
  id: number;
  name: string;
  focusAreas: FocusAreas[];
  usesPilatesRing: boolean;
  usesWeights: boolean;
  easyReps: number[];
  medReps: number[];
  hardReps: number[];
  howToURL: string;
  isTimed: boolean;
}

const data: Exercise[] = [
  // {
  //   id: 0,
  //   name: "",
  //   focusAreas: [],
  //   usesPilatesRing: false,
  //   usesWeights: false,
  //   easyReps: [],
  //   medReps: [],
  //   hardReps: [],
  //   howToURL: "",
  //   isTimed: false,
  // },
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
    name: "Crunches",
    focusAreas: ["core", "abs"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [6, 10],
    hardReps: [11, 15],
    howToURL:
      "https://www.verywellfit.com/how-to-do-a-perfect-abdominal-crunch-1229513",
    isTimed: false,
  },
  {
    id: 3,
    name: "Lunges",
    focusAreas: ["legs", "lower body"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [6, 10],
    hardReps: [11, 15],
    howToURL:
      "https://www.verywellfit.com/how-to-lunge-variations-modifications-and-mistakes-1231320",
    isTimed: false,
  },
  {
    id: 4,
    name: "Squats",
    focusAreas: ["legs", "lower body", "core"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [6, 10],
    hardReps: [11, 15],
    howToURL: "https://www.verywellfit.com/safe-squat-technique-3119136",
    isTimed: false,
  },
  {
    id: 5,
    name: "Hip Hinges",
    focusAreas: ["core", "abs", "lower body"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [10, 10],
    medReps: [11, 20],
    hardReps: [21, 30],
    howToURL: "https://www.verywellfit.com/how-to-do-a-hip-hinge-4685934",
    isTimed: false,
  },
  {
    id: 6,
    name: "Calf Raises",
    focusAreas: ["legs", "lower body"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [10, 10],
    medReps: [11, 20],
    hardReps: [21, 30],
    howToURL: "https://www.verywellfit.com/how-to-do-calf-raises-4801090",
    isTimed: false,
  },
  {
    id: 7,
    name: "Mountain Climbers",
    focusAreas: ["core", "arms", "legs", "lower body", "upper arms", "stamina"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [5, 10],
    hardReps: [11, 15],
    howToURL: "https://www.verywellfit.com/mountain-climbers-exercise-3966947",
    isTimed: false,
  },
  {
    id: 8,
    name: "Leg Lifts",
    focusAreas: ["core", "legs", "lower body", "abs"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [6, 10],
    hardReps: [11, 15],
    howToURL: "https://www.wikihow.com/Do-Leg-Lifts",
    isTimed: false,
  },
  {
    id: 9,
    name: "Knee Pull-Ins",
    focusAreas: ["legs", "core", "abs"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [6, 10],
    hardReps: [11, 15],
    howToURL: "https://adashofmacros.com/leg-pull-ins-core-exercise/",
    isTimed: false,
  },
  {
    id: 10,
    name: "Kicks",
    focusAreas: ["legs", "stamina"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [5, 10],
    hardReps: [11, 15],
    howToURL: "",
    isTimed: false,
  },
  {
    id: 11,
    name: "Glute Bridges",
    focusAreas: ["core", "glutes", "lower body"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [6, 10],
    hardReps: [11, 15],
    howToURL: "https://blog.nasm.org/how-to-do-a-glute-bridge",
    isTimed: false,
  },
  {
    id: 12,
    name: "Jumping Jacks",
    focusAreas: ["stamina", "lower body"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [10, 10],
    medReps: [11, 20],
    hardReps: [20, 30],
    howToURL:
      "https://www.nytimes.com/guides/well/activity/how-to-do-a-jumping-jack",
    isTimed: false,
  },
  {
    id: 13,
    name: "Bicycle Crunches",
    focusAreas: ["core", "stamina", "abs", "lower body"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [6, 10],
    hardReps: [11, 15],
    howToURL: "https://www.verywellfit.com/bicycle-crunch-exercise-3120058",
    isTimed: false,
  },
  {
    id: 14,
    name: "Tricep Dips",
    focusAreas: ["arms", "legs", "upper arms"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [5, 10],
    hardReps: [11, 15],
    howToURL:
      "https://www.verywellfit.com/the-chair-dip-triceps-exercise-3120734",
    isTimed: false,
  },
  {
    id: 15,
    name: "Wall Sit",
    focusAreas: ["core", "legs", "lower body"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [10, 10],
    medReps: [20, 20],
    hardReps: [30, 30],
    howToURL: "https://www.verywellfit.com/the-wall-sit-quad-exercise-3120741",
    isTimed: true,
  },
  {
    id: 16,
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
    id: 17,
    name: "Chair Pose",
    focusAreas: ["yoga", "core", "lower body", "stamina"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [2, 2],
    medReps: [4, 4],
    hardReps: [8, 8],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Chair_Pose",
    isTimed: false,
  },
  {
    id: 18,
    name: "Warrior I Pose",
    focusAreas: ["yoga", "aerobic", "lower body", "posture"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [4, 4],
    medReps: [6, 6],
    hardReps: [8, 8],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Warrior_I_Pose",
    isTimed: false,
  },
  {
    id: 19,
    name: "Fan Pose",
    focusAreas: ["yoga", "waist", "flexibility", "shoulders"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [4, 4],
    medReps: [6, 6],
    hardReps: [8, 8],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Fan_Pose",
    isTimed: false,
  },
  {
    id: 20,
    name: "Warrior II Pose",
    focusAreas: ["yoga", "arms", "chest", "upper arms", "shoulders"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [4, 4],
    medReps: [6, 6],
    hardReps: [8, 8],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Warrior_II_Pose",
    isTimed: false,
  },
  {
    id: 21,
    name: "Revolved Crescent Lunge Pose",
    focusAreas: ["yoga", "core", "legs", "waist", "lower body", "core"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [4, 4],
    medReps: [6, 6],
    hardReps: [8, 8],
    howToURL:
      "https://ringfitadventure.fandom.com/wiki/Revolved_Crescent_Lunge_Pose",
    isTimed: false,
  },
  {
    id: 22,
    name: "Warrior III Pose",
    focusAreas: ["yoga", "core", "aerobic", "stamina"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [4, 4],
    medReps: [6, 6],
    hardReps: [8, 8],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Warrior_III_Pose",
    isTimed: false,
  },
  {
    id: 23,
    name: "Hinge Pose",
    focusAreas: ["yoga", "legs", "arms", "shoulders", "back"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [4, 4],
    medReps: [6, 6],
    hardReps: [8, 8],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Hinge_Pose",
    isTimed: false,
  },
  {
    id: 24,
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
    id: 25,
    name: "Standing Forward Fold",
    focusAreas: ["yoga", "upper arms", "shoulders", "flexibility"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [4, 4],
    medReps: [6, 6],
    hardReps: [8, 8],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Standing_Forward_Fold",
    isTimed: false,
  },
  {
    id: 26,
    name: "Boat Pose",
    focusAreas: ["yoga", "abs", "core", "stamina"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [2, 2],
    medReps: [4, 4],
    hardReps: [6, 6],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Boat_Pose",
    isTimed: false,
  },
  {
    id: 27,
    name: "Knee-to-Chest",
    focusAreas: ["stomach", "arms", "abs", "upper arms"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Knee-to-Chest",
    isTimed: false,
  },
  {
    id: 28,
    name: "Standing Twist",
    focusAreas: ["stomach", "waist", "aerobic"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [20, 20],
    medReps: [30, 30],
    hardReps: [40, 40],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Standing_Twist",
    isTimed: false,
  },
  {
    id: 29,
    name: "Plank",
    focusAreas: ["stomach", "abs", "core", "posture"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 5],
    medReps: [10, 10],
    hardReps: [15, 15],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Plank",
    isTimed: false,
  },
  {
    id: 30,
    name: "Overhead Bend",
    focusAreas: ["stomach", "core", "posture", "trapezius"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Bend",
    isTimed: false,
  },
  {
    id: 31,
    name: "Open & Close Leg Raise",
    focusAreas: ["stomach", "abs", "legs", "glutes"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL:
      "https://ringfitadventure.fandom.com/wiki/Open_%26_Close_Leg_Raise",
    isTimed: false,
  },
  {
    id: 32,
    name: "Overhead Hip Shake",
    focusAreas: ["stomach", "waist", "aerobic", "upper arms"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 30],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Hip_Shake",
    isTimed: false,
  },
  {
    id: 33,
    name: "Seated Forward Press",
    focusAreas: ["stomach", "upper arms", "abs", "flexibility"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Seated_Forward_Press",
    isTimed: false,
  },
  {
    id: 34,
    name: "Overhead Lunge Twist",
    focusAreas: ["core", "waist", "legs", "stomach"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Lunge_Twist",
    isTimed: false,
  },
  {
    id: 35,
    name: "Leg Raise",
    focusAreas: ["core", "stomach", "abs"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Leg_Raise",
    isTimed: false,
  },
  {
    id: 36,
    name: "Flutter Kick",
    focusAreas: ["stomach", "abs", "legs"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Flutter_Kick",
    isTimed: false,
  },
  {
    id: 37,
    name: "Pendulum Bend",
    focusAreas: ["core", "stomach", "waist", "lower body"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Pendulum_Bend",
    isTimed: false,
  },
  {
    id: 38,
    name: "Leg Scissors",
    focusAreas: ["stomach", "abs", "legs", "aerobic"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [15, 20],
    medReps: [21, 25],
    hardReps: [25, 30],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Leg_Scissors",
    isTimed: false,
  },
  {
    id: 39,
    name: "Russian Twist",
    focusAreas: ["core", "stomach", "waist", "abs"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Russian_Twist",
    isTimed: false,
  },
  {
    id: 40,
    name: "Overhead Side Bend",
    focusAreas: ["core", "stomach", "waist", "upper arms"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Side_Bend",
    isTimed: false,
  },
  {
    id: 41,
    name: "Seated Ring Raise",
    focusAreas: ["core", "stomach", "abs", "legs"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Seated_Ring_Raise",
    isTimed: false,
  },
  {
    id: 42,
    name: "Squat",
    focusAreas: ["legs", "glutes", "aerobic"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Squat",
    isTimed: false,
  },
  {
    id: 43,
    name: "Knee Lift",
    focusAreas: ["legs", "abs", "aerobic"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Knee_Lift",
    isTimed: false,
  },
  {
    id: 44,
    name: "Thigh Press",
    focusAreas: ["legs", "lower body", "posture"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Thigh_Press",
    isTimed: false,
  },
  {
    id: 45,
    name: "Wide Squat",
    focusAreas: ["legs", "glutes", "aerobic"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Wide_Squat",
    isTimed: false,
  },
  {
    id: 46,
    name: "Hip Lift",
    focusAreas: ["legs", "glutes", "core"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [15, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Hip_Lift",
    isTimed: false,
  },
  {
    id: 47,
    name: "Ring Raise Combo",
    focusAreas: ["legs", "glutes", "aerobic"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Ring_Raise_Combo",
    isTimed: false,
  },
  {
    id: 48,
    name: "Overhead Squat",
    focusAreas: ["legs", "glutes", "aerobic"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [15, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Squat",
    isTimed: false,
  },
  {
    id: 49,
    name: "Mountain Climber",
    focusAreas: ["legs", "upper arms", "glutes"],
    usesPilatesRing: false,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Mountain_Climber",
    isTimed: false,
  },
  {
    id: 50,
    name: "Side Step",
    focusAreas: ["legs", "upper arms", "aerobic"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Side_Step",
    isTimed: false,
  },
  {
    id: 51,
    name: "Knee-Lift Combo",
    focusAreas: ["legs", "glutes", "aerobic"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Knee-Lift_Combo",
    isTimed: false,
  },
  {
    id: 52,
    name: "Overhead Press",
    focusAreas: ["arms", "upper arms", "chest", "shoulders"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Press",
    isTimed: false,
  },
  {
    id: 53,
    name: "Front Press",
    focusAreas: ["arms", "chest"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [15, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Front_Press",
    isTimed: false,
  },
  {
    id: 54,
    name: "Bow Pull",
    focusAreas: ["arms", "upper arms", "trapezius", "core"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Bow_Pull",
    isTimed: false,
  },
  {
    id: 55,
    name: "Overhead Arm Twist",
    focusAreas: ["arms", "upper arms", "shoulders", "core"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 20],
    medReps: [21, 30],
    hardReps: [31, 40],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Arm_Twist",
    isTimed: false,
  },
  {
    id: 56,
    name: "Overhead Arm Spin",
    focusAreas: ["arms", "upper arms", "shoulders", "posture"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Arm_Spin",
    isTimed: false,
  },
  {
    id: 57,
    name: "Shoulder Press",
    focusAreas: ["arms", "upper arms", "posture", "shoulders"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Shoulder_Press",
    isTimed: false,
  },
  {
    id: 58,
    name: "Tricep Kickback",
    focusAreas: ["arms", "upper arms"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Tricep_Kickback",
    isTimed: false,
  },
  {
    id: 59,
    name: "Back Press",
    focusAreas: ["arms", "upper arms", "posture", "shoulders"],
    usesPilatesRing: true,
    usesWeights: false,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Back_Press",
    isTimed: false,
  },
  {
    id: 60,
    name: "Weighted Overhead Squat",
    focusAreas: ["legs", "glutes", "aerobic", "upper arms"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [15, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Squat",
    isTimed: false,
  },
  {
    id: 61,
    name: "Weighted Tricep Kickback",
    focusAreas: ["arms", "upper arms"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Tricep_Kickback",
    isTimed: false,
  },
  {
    id: 62,
    name: "Weighted Overhead Arm Twist",
    focusAreas: ["arms", "upper arms", "shoulders", "core"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 20],
    medReps: [21, 30],
    hardReps: [31, 40],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Arm_Twist",
    isTimed: false,
  },
  {
    id: 63,
    name: "Weighted Overhead Arm Spin",
    focusAreas: ["arms", "upper arms", "shoulders", "posture"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Arm_Spin",
    isTimed: false,
  },
  {
    id: 64,
    name: "Weighted Side Step",
    focusAreas: ["legs", "upper arms", "aerobic"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Side_Step",
    isTimed: false,
  },
  {
    id: 65,
    name: "Weighted Knee-Lift Combo",
    focusAreas: ["legs", "glutes", "aerobic", "arms"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Knee-Lift_Combo",
    isTimed: false,
  },
  {
    id: 66,
    name: "Weighted Russian Twist",
    focusAreas: ["core", "stomach", "waist", "abs"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Russian_Twist",
    isTimed: false,
  },
  {
    id: 67,
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
  {
    id: 68,
    name: "Weighted Seated Ring Raise",
    focusAreas: ["core", "stomach", "abs", "legs"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Seated_Ring_Raise",
    isTimed: false,
  },
  {
    id: 69,
    name: "Weighted Pendulum Bend",
    focusAreas: ["core", "stomach", "waist", "lower body"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Pendulum_Bend",
    isTimed: false,
  },
  {
    id: 70,
    name: "Weighted Overhead Lunge Twist",
    focusAreas: ["core", "waist", "legs", "stomach"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 25],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Lunge_Twist",
    isTimed: false,
  },
  {
    id: 71,
    name: "Weighted Overhead Hip Shake",
    focusAreas: ["stomach", "waist", "aerobic", "upper arms"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [10, 15],
    medReps: [16, 20],
    hardReps: [21, 30],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Hip_Shake",
    isTimed: false,
  },
  {
    id: 72,
    name: "Weighted Overhead Bend",
    focusAreas: ["stomach", "core", "posture", "trapezius"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [5, 10],
    medReps: [11, 15],
    hardReps: [16, 20],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Overhead_Bend",
    isTimed: false,
  },
  {
    id: 73,
    name: "Weighted Standing Twist",
    focusAreas: ["stomach", "waist", "aerobic"],
    usesPilatesRing: false,
    usesWeights: true,
    easyReps: [20, 20],
    medReps: [30, 30],
    hardReps: [40, 40],
    howToURL: "https://ringfitadventure.fandom.com/wiki/Standing_Twist",
    isTimed: false,
  },
];

export default data;
