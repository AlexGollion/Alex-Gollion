import Logo from "../Logo";

function Competence()
{
    return (
        <div id="competences">
            <h2>Mes compétences</h2>
            <div className="sectionLogo">
                <Logo id={1} />
                <Logo id={2} />
                <Logo id={3} />
            </div>
        </div>
    )
}

export default Competence;