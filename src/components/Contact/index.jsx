import test from '../../assets/CV_Gollion_Alex.pdf';

function Contact() 
{
    return (
        <div id='contact'>
            <h2>Me Contacter</h2>
            <a href={test} download='CV_Gollion_Alex'>Télécharger mon CV</a>
            <form method='POST' action='https://alexgollion.000webhostapp.com/traitement.php'>
                <div id="nomPrenom">
                    <div className="test">
                        <label for="nom">Nom</label>
                        <input type="text" id="nom" name="nom" />
                    </div>
                    <div className="test">
                        <label for="prenom">Prénom</label>
                        <input type="text" id="prenom" name="prenom" />
                    </div>
                </div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
                <label for="sujet">Sujet</label>
                <input type="text" id="sujet" name="sujet" />
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="8" cols="50" />
            </form>
        </div>
    )
}

export default Contact