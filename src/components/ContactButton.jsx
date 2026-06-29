import React from "react";
import '../styles/ContactButton.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactButton({ href, icon, text, onClick }) {
   
        if (href) {
            return (
            <div className="buttonContainer">
                <a href={href} target="_blank" rel="noopener noreferrer" className="button">
                    <FontAwesomeIcon icon={icon} className="Icon" />
                    <p>{text}</p>
                </a>
            </div>
        );
}
        return (
            <div className="buttonContainer">
            <button  onClick={onClick}>
                <FontAwesomeIcon icon={icon} className="Icon" />
                <p>{text}</p>
            </button>
            </div>
        );
}
