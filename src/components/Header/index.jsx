import { HashLink } from "react-router-hash-link";

function Header()
{
    return (
        <div className="header">
            <nav>
                <HashLink href='/#présentation'>Présentation</HashLink>
                <HashLink href='/#competences'>Mes Compétences</HashLink>
                <HashLink href='/#projets'>Mes Projets</HashLink>
                <HashLink href='/#contact'>Me Contacter</HashLink>
            </nav>
        </div>
    );
}

export default Header;