import Card from "../Card";
import Data from "../../projet.json";

function Projet()
{
    return(
        <div id="projets">
            <h2>Mes Projets</h2>
            <div className="gallery">
                {Data.map((projet) => 
                    <Card
                        key={projet.id}
                        image={projet.cover}
                        titre={projet.titre}
                        description={projet.description}
                        id={projet.id}
                    />
                )}
            </div>
        </div>
    );
}

export default Projet;