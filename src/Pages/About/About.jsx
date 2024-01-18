// Importation des modules nécessaires depuis React et des composants externes
import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import imgAbout from "../../assets/img_bannier_about.png";
import "../../components/Collapse/Collapse.scss";

// Définition du composant fonctionnel "About"
const About = () => {
  // Utilisation de l'état local pour gérer l'état des sections collapse
  const [isCollapseOpen1, setCollapseOpen1] = React.useState(false);
  const [isCollapseOpen2, setCollapseOpen2] = React.useState(false);
  const [isCollapseOpen3, setCollapseOpen3] = React.useState(false);
  const [isCollapseOpen4, setCollapseOpen4] = React.useState(false);

  // Fonctions de bascule pour ouvrir ou fermer les sections effondrées
  const toggleCollapse1 = () => {
    setCollapseOpen1(!isCollapseOpen1);
  };

  const toggleCollapse2 = () => {
    setCollapseOpen2(!isCollapseOpen2);
  };

  const toggleCollapse3 = () => {
    setCollapseOpen3(!isCollapseOpen3);
  };

  const toggleCollapse4 = () => {
    setCollapseOpen4(!isCollapseOpen4);
  };

  return (
    <div>
      <div className="banner-about">
        <img className="banner-picture" src={imgAbout} alt="About Kasa" />
      </div>
      <div className="collapse-container">
        <Collapse
          title="Fiabilité"
          toggleCollapse={toggleCollapse1}
          isOpen={isCollapseOpen1}
        >
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse
          title="Respect"
          toggleCollapse={toggleCollapse2}
          isOpen={isCollapseOpen2}
        >
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse
          title="Service"
          toggleCollapse={toggleCollapse3}
          isOpen={isCollapseOpen3}
        >
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>
        <Collapse
          title="Sécurité"
          toggleCollapse={toggleCollapse4}
          isOpen={isCollapseOpen4}
        >
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  );
};

export default About;
