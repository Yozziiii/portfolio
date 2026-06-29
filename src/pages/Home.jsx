import React from "react";
import project from "../data/data.json"
import "../styles/Home.scss"
import ProjectCard from "../components/ProjectCard";
import Contact from "../components/Contact";

export default function Home (){

    function GestionProjet(){
        
        return (
        <div className="container">
            <div className="text">
                <h2 id="Projets">Mes projets</h2>
            </div>
                
                {/* <p>Voici une sélection de mes projets réalisés dans le cadre de ma formation .</p>
                <p>Vous pouvez cliquer sur le "+" pour en savoir plus sur chaque projet.</p>
                */}


            <div className="parent">
                {project.map(projet => (
                    <ProjectCard project={projet} key={projet.id}/>    
                ))}
            </div>
        </div>
    )}
    
    
    return (
        <main>
            <GestionProjet/>
            <Contact/>
        </main>
    )

}