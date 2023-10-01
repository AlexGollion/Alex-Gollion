import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import DATA_PROJET from '../../projet.json';
import DATA_COMPETENCES from '../../competences.json';
import Carrousel from '../../components/Carrousel';

function Projet()
{
    const { id } = useParams(); 
    let dataProjet = DATA_PROJET[id-1];
    let dataComp = [];
    let j, find;
    for (let i = 0; i<dataProjet.competences.length; i++)
    {
        find = false;
        j = 0;
        while (j<DATA_COMPETENCES.length && !find)
        {
            if (dataProjet.competences[i] === DATA_COMPETENCES[j].id)
            {
                dataComp.push(DATA_COMPETENCES[j].nom);
            }
            j++;
        }
    }
    
    const [isOpen, setOpen] = useState('slideUp');
    const [rotation, setRotation] = useState('');

    function click()
    {
        if (isOpen === 'slideUp')
        {
            setOpen('slideDown');
            setRotation('rotation')
        }
        else
        {
            setOpen('slideUp');
            setRotation('');
        }
    }

    return(
        <div className="projet">
            <Carrousel
                key={dataProjet.id}
                pictures={dataProjet.image}
            />
            <div className='information'>
                <div className="tags">
                    <h1>{dataProjet.titre}</h1>
                    <div>
                        {dataComp.map((competence) => 
                            <p> {competence} </p>
                        )}
                    </div>
                    <a href={dataProjet.code}> Code github </a>
                </div>

                <div className='collapse'>
                    <div className='collapseTitle'>
                        <h2>Description</h2>
                        <button className={`collapse ${rotation}`} onClick={click}>
                            <FontAwesomeIcon icon={faChevronUp} className="icon" />
                        </button>
                    </div>
                    <div className={`collapseText ${isOpen}`}>
                        <p>{dataProjet.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projet;