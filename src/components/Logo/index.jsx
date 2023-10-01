import PropTypes from 'prop-types';
import DATA_COMPETENCES from "../../competences.json";
import DATA_DOMAINES from '../../domaines.json';

function Logo({id})
{

    let images = [];
    let domaine;
    for (let i = 0; i<DATA_COMPETENCES.length; i++)
    {
        if (DATA_COMPETENCES[i].domaine === id)
        {
            images.push(DATA_COMPETENCES[i].logo);
        }
    }

    for (let i = 0; i<DATA_DOMAINES.length; i++)
    {
        if (DATA_DOMAINES[i].id === id)
        {
            domaine = DATA_DOMAINES[i].nom;
        }
    }

    return(
        <div className="logo">
            <h3>{domaine}</h3>
            <div>
                {images.map((img) =>
                    <img src={img} alt="test" />
                )}
            </div>
        </div>
    )
}

Logo.propTypes = {
    id: PropTypes.number
}

export default Logo;