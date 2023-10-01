function Card({image, titre, description, id})
{
    return(
        <a href={`projet/${id}`} className="card" style={{backgroundImage: `url(${image})`}}>
            <span>{titre}</span>
        </a>
    );
}

export default Card;