import arrowUp from "../../../assets/Arrow-up.svg";
import "./Arrow.scss";

// Définition du composant fonctionnel "ArrowAnimation"
const ArrowAnimation = ({ isUp, onToggle }) => {
  // Détermination de la classe CSS pour la direction de la flèche
  const arrowClass = isUp ? "down" : "up";

  // Rendu du composant avec une flèche qui peut être tournée vers le haut ou vers le bas
  return (
    <div>
      {/* Bouton avec la classe CSS "arrow" et la classe pour la rotation, ainsi qu'un gestionnaire de clic */}
      <button onClick={onToggle} className={`arrow rotate ${arrowClass}`}>
        {/* Image de la flèche */}
        <img src={arrowUp} alt="Flèche" />
      </button>
    </div>
  );
};

export default ArrowAnimation;
