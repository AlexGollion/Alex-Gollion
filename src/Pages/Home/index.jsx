import image from '../../assets/journal.webp';
import profil from '../../assets/profil.webp';
import Competence from '../../components/Competence';
import Projet from '../../components/Projet';
import Contact from '../../components/Contact';

function Home()
{
    return(
        <div className='home'>
            <img src={image} alt='' />
            <div id='présentation'>
                <h2>Présentation</h2>
                <div className='presentationText'>
                    <img src={profil} alt='profil' />
                    <h3>Alex Gollion</h3>
                    <p>Passionné par la programmation depuis le lycée, j'ai appris plusieurs langages en autodidacte tel que le c#.
                        J'ai suivi la formation Développeur Web d'Openclassrooms,
                        afin de me spécialiser dans le développement web. J'ai eu l'occasion d'y développer des compétences aussi bien front-end que back-end
                        à travers divers projets que vous pouvez retrouver ci-dessous.
                    </p>
                </div>
            </div>
            <Competence/>
            <Projet/>
            <Contact/>
        </div>
    );
}

export default Home;