import { Link, useLocation } from "react-router-dom";

function Header()
{
    const location = useLocation();
    let page;
    let split = location.pathname.split('/');

    if(split[1] === '')
    {
        page = true;
    }
    else
    {
        page = false;
    }

    return (
        <div className="header">
            
                {page
                ?
                    <nav>
                        <a href='#présentation'>Présentation</a>
                        <a href='#competences'>Mes Compétences</a>
                        <a href='#projets'>Mes Projets</a>
                        <a href='#contact'>Me Contacter</a>
                    </nav>
                :
                    <nav>
                        <Link to='/'> Page d'accueil </Link>
                    </nav>
                }

        </div>
    );
}

export default Header;