import React from "react";
import {useState} from "react";
import '../styles/ProjectCard.scss'


export default function ProjectCard ({ project }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="parent" >
            <img src={project.cover} alt="image d'accueil du projet"/>
            <h3> {project.title} </h3>
            <p> {project.technologie} </p>
            <p onClick={() => setIsOpen(!isOpen)}>+</p>

            <div className={`text ${isOpen ? "open" : "closed"}`}>
                <h2>{project.title}</h2>
                <img src={project.cover} alt="image d'accueil du projet"/>
                <p> {project.info} </p>
                <p> {project.sujet} </p>
                <p> {project.technologie} </p>
                <p> {project.git} </p>
            </div>
        </div>
        

    )


}