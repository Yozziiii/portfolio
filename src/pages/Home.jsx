import React from "react";
import project from "../data/data.json"
import "../styles/Home.scss"
import {useState} from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home (){

    const [isOpen, setIsOpen] = useState(false);
    function GestionProjet(){
        
        return project.map(projet => (
            <ProjectCard project={projet} key={projet.id}/>    
        ))
    }
    
    
    return (
        <main>
            <Header/>
            <GestionProjet/>
            <Footer/>
        </main>

    )

}