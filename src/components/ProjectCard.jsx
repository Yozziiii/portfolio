import React from "react";
import {useState} from "react";
import '../styles/ProjectCard.scss'


export default function ProjectCard ({ project }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="child" >
            <img src={project.cover} alt="image d'accueil du projet"/>
            <h3> {project.title} </h3>
            <p> {project.technologie} </p>
            <p  className="switch" onClick={() => setIsOpen(!isOpen)}>+</p>

            {isOpen && (
        <div className="overlay open" onClick={() => setIsOpen(false)}>
            <div
                className="text"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{project.title}</h2>
                <img src={project.cover} alt="image d'accueil du projet"/>
                <div className="textContent">
                    <p>Info : {project.info}</p>
                    <p>Sujet : {project.sujet}</p>
                    <p>Technologies : {project.technologie}</p>
                    <a href={project.git} target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </div>
            </div>
        </div>
    )}
        </div>
        

    )


}