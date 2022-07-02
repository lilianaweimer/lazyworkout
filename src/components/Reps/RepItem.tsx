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
      <div>
        {isTimed ? (
          <p className="bold rep_num">{numOfReps} seconds</p>
        ) : (
          <p className="bold rep_num">{numOfReps}</p>
        )}
        <p className="bold">{exercise.name}</p>
      </div>
      <div className="rep_inner">
        <a href={exercise.howToURL} target="_blank" rel="noreferrer noopener">
          How?
        </a>
        {exercise.usesPilatesRing && (
          <img src="src/resources/pilates_ring.png" className="rep_img" />
        )}
        {exercise.usesWeights && (
          <img src="src/resources/weight.png" className="rep_img" />
        )}
      </div>
    </article>
  );
};

export default RepItem;
