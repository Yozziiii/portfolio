import React from 'react';
import '../styles/Accueil.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faReact, faJs, faGithub, faNodeJs } from "@fortawesome/free-brands-svg-icons";

export default function Accueil() {
    return (
        <section className="accueil" id="accueil">

            <div className="one" tabIndex={0}> 
                <FontAwesomeIcon icon={faAngleLeft} className="first"  />
                <div className="Front">
                    <p className="skills" >Compétences Frontend : HTML, CSS, React, JavaScript, GitHub</p>
                    <div className="FrontIcons">
                        <FontAwesomeIcon icon={faHtml5} className="html"  />
                        <FontAwesomeIcon icon={faCss3Alt} className="css"  />
                        <FontAwesomeIcon icon={faReact} className="react"  />
                        <FontAwesomeIcon icon={faJs} className="js"  />
                        <FontAwesomeIcon icon={faGithub} className="github"  />
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

            <div className="two" tabIndex={0}>
                <div className="Back">
                    <div className="BackIcons">
                        <FontAwesomeIcon icon={faNodeJs} className="nodejs"  />
                        <FontAwesomeIcon icon={faDatabase} className="database"  />
                        <img src="/assets/image/MongoDB.svg" alt="MongoDB" className="mongodb" />
                        <img src="/assets/image/api.svg" alt="API" className="api" />
                    </div>
                    <p className="skills" >Compétences Backend : Node.js, Express, MongoDB, API REST</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className="second"  />
            </div>

        </section>
    );
}