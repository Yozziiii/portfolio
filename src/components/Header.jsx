import '../styles/Header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header( {theme, setTheme} ) {
    return (
    <header>
        <h2>Goncalves Bryan</h2>
        <nav>
            <ul>
                <li id='Accueil'><a href='#Accueil'>Accueil</a></li>
                <li><a href='#aPropos' >A Propos</a></li>
                <li><a href='#Projets' >Projets</a></li>
                <li><a href='#Contact' >Contact</a></li>
                <button 
                    className={`toggle ${theme}`}
                    onClick={() => 
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }>  
                    <FontAwesomeIcon icon={faMoon} className="Icon" />
                    <span className="rond"></span> 
                    <FontAwesomeIcon icon={faSun} className="Icon" /> 
                </button>
            </ul>
        </nav>
    </header>
    )
}