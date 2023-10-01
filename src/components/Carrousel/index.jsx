import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import PropTypes from 'prop-types';

function Carrousel({pictures})
{
    const [currentImg, setCurrentImg] = useState(0);

    function prev()
    {
        if(currentImg === 0)
        {
            setCurrentImg(pictures.length-1);
        }
        else
        {
            setCurrentImg(currentImg - 1)
        }
    }

    function next()
    {
        if(currentImg === pictures.length-1)
        {
            setCurrentImg(0);
        }
        else
        {
            setCurrentImg(currentImg + 1)
        }
    }
    return(
        <div className="image">
            <img src={pictures[currentImg]} alt='projet'/>
            <button className='prev' onClick={prev}>
                <FontAwesomeIcon icon={faChevronUp} className='icon' />
            </button>
            <button className='next' onClick={next}>
                <FontAwesomeIcon icon={faChevronUp} className='icon' />
            </button>
        </div>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carrousel;