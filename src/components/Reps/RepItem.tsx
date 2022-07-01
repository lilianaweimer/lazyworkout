import { Exercise } from "../../resources/data";
import "./Reps.scss";

interface RepItemProps {
  isTimed: boolean;
  numOfReps: number;
  exercise: Exercise;
}

const RepItem: React.FC<RepItemProps> = ({ isTimed, numOfReps, exercise }) => {
  return (
    <article className="rep_item" id={`${exercise.id}`}>
      {isTimed ? <p>{numOfReps} seconds</p> : <p>{numOfReps}</p>}
      <p>{exercise.name}</p>
      {exercise.usesPilatesRing && (
        <img src="src/resources/pilates_ring.png" className="rep_img" />
      )}
      {exercise.usesWeights && (
        <img src="src/resources/weight.png" className="rep_img" />
      )}
    </article>
  );
};

export default RepItem;
