import React from 'react';
import '../styles/APropos.scss';

export default function APropos() {
    return (
        <section className="aPropos" id="aPropos" tabIndex={0}>
            <div className="textAPropos">
                <h2>À propos</h2>

                <p>Au cours de ma formation, j'ai réalisé plusieurs projets qui m'ont permis de développer 
                mes compétences en HTML, CSS, JavaScript, React, Node.js, Express et MongoDB. J'utilise 
                également Git et GitHub pour suivre l'évolution et le versionnement de mes projets.</p>

                <p>Ces réalisations m'ont appris à concevoir des interfaces responsives, développer des 
                applications web dynamiques et produire un code clair et maintenable.</p>

                <p>Curieux et rigoureux, je cherche constamment à approfondir mes connaissances et à
                relever de nouveaux défis techniques.</p>
            </div>
        </section>
    );
}