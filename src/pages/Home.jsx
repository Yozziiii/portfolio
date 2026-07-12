import React from "react";
import "../styles/Home.scss"
import Project from "../components/Project";
import Contact from "../components/Contact";
import APropos from "../components/APropos";
import Accueil from "../components/Accueil";

export default function Home (){
    
    return (
        <main>
            <Accueil/>
            <APropos/>
            <Project/>
            <Contact/>
        </main>
    )

}