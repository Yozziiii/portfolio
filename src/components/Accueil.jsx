import React from 'react';
import '../styles/Accueil.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faDatabase, faPlug, faServer } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faReact, faJs, faGithub, faNodeJs } from "@fortawesome/free-brands-svg-icons";

export default function Accueil() {
    return (
        <div className="accueil" id="accueil">

            <div className="one" tabindex={0}> 
                <FontAwesomeIcon icon={faAngleLeft} className="first"  />

                <div className="Front">
                    <p className="Frontskills" >Compétences Frontend : HTML, CSS, React, JavaScript, GitHub</p>
                    <div className="FrontIcons">
                        <FontAwesomeIcon icon={faHtml5}  />
                        <FontAwesomeIcon icon={faCss3Alt}  />
                        <FontAwesomeIcon icon={faReact}  />
                        <FontAwesomeIcon icon={faJs}  />
                        <FontAwesomeIcon icon={faGithub}  />
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="textAccueil">
                    <h1>Bienvenue sur mon portfolio</h1>
                    <p>Je suis Bryan Goncalves, un développeur web junior passionné par la création d'applications web modernes et performantes.</p>
                    <p>Explorez mes projets et découvrez mes compétences en développement web.</p>
                </div>               
                <div className="recherche">
                    <p>Mon objectif est de poursuivre mon parcours en intégrant une 3ᵉ année de Bachelor 
                    en cybersécurité. Cette orientation correspond à mon intérêt pour la cybersécurité 
                    et à la direction que je souhaite donner à mon parcours professionnel.</p>
                </div>

            </div>

            <div className="two" tabindex={0}>
                <div className="Back">
                    <div className="BackIcons">
                        <FontAwesomeIcon icon={faNodeJs}  />
                        <FontAwesomeIcon icon={faDatabase}  />
                        <FontAwesomeIcon icon={faServer}  />
                        <FontAwesomeIcon icon={faPlug}  />
                    </div>
                    <p className="skills" >Compétences Backend : Node.js, Express, MongoDB, API REST</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className="second"  />
            </div>

        </div>
    );
}