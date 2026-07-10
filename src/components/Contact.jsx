import React from 'react';
import '../styles/Contact.scss';
import ContactButton from "./ContactButton"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <div className="contact">
            <h2 id="Contact">Contact</h2>
                
            <ContactButton
                icon={faEnvelope}
                text="Me contacter"
                onClick={() => window.location.href = "mailto:tonmail@example.com"}
            />

            <ContactButton
                icon={faPhone}
                text="+ Tel "
                onClick={() => window.location.href = "tel:+33612345678"}
            />
            
            <ContactButton
                href="https://github.com/Yozziiii"
                icon={faGithub}
                text="Profil GitHub"
            />

        </div>
    )
}