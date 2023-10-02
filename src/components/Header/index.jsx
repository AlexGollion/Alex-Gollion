import { HashLink } from "react-router-hash-link";

function Header()
{
    return (
        <div className="header">
            <nav>
                <HashLink to='/#présentation'>Présentation</HashLink>
                <HashLink to='/#competences'>Mes Compétences</HashLink>
                <HashLink to='/#projets'>Mes Projets</HashLink>
                <HashLink to='/#contact'>Me Contacter</HashLink>
            </nav>
        </div>
    );
}

export default Header;