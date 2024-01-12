import arrowUp from "../../../assets/Arrow-up.svg";
import arrowDown from "../../../assets/Arrow-down.svg";
import "./ArrowAnimation.scss";

const ArrowAnimation = ({ isUp, onToggle }) => {
  const arrowClass = isUp ? "rotate-down" : "rotate-up";

  return (
    <div>
      <button onClick={onToggle} className={`arrow ${arrowClass}`}>
        <img src={isUp ? arrowUp : arrowDown} alt="Flèche" />
      </button>
    </div>
  );
};

export default ArrowAnimation;
