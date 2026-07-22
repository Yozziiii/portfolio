import React from "react";
import "../styles/Project.scss"
import project from "../data/data.json"
import ProjectCard from "../components/ProjectCard";



export default function GestionProjet(){
        
        return (
        <section className="Project" id="Projets">
            <div className="titre">
                <h2 id="Projets">Mes projets</h2>
            </div>
            
            <div className="parent">
                {project.map(projet => (
                    <ProjectCard project={projet} key={projet.id}/>    
                ))}
            </div>
        </section>
    )}