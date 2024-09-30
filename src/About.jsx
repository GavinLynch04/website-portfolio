import './Styles/About.css';
import reactIcon from './assets/react.svg';
import pythonIcon from './assets/python.png';
import tensorflowIcon from './assets/tensorflow.png';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import jsIcon from './assets/javascript.png';
import pytorchIcon from './assets/pytorch.png';
import cIcon from './assets/c.png';


const About = () => {
    return (
        <section id="about">
            <div className="about">
                <div className="about_head">
                    <h1 className='head'>About</h1>
                </div>
                <div className="about_content">
                    <div className="about_body">
                        <p className='aboutText'>Hi, I’m Gavin Lynch, a Computer Science student at Cal Poly,
                            San Luis Obispo, specializing in Artificial Intelligence and Machine Learning.
                            I’m passionate about building innovative solutions using technologies like Python,
                            JavaScript, and the MERN stack, with a focus on machine learning research, software
                            engineering, and genetics. When I'm not coding or exploring new tech, you'll likely find
                            me trail running or skiing. I'm always excited to collaborate on impactful projects that
                            bridge cutting-edge tech with real-world challenges.</p>
                    </div>
                    <div className="about_tech">
                        <button>
                            <img src={reactIcon} alt="React"/>
                        </button>
                        <button>
                            <img src={pythonIcon} alt="Python"/>
                        </button>
                        <button>
                            <img src={tensorflowIcon} alt="TensorFlow"/>
                        </button>
                        <button>
                            <img src={htmlIcon} alt="HTML"/>
                        </button>
                        <button>
                            <img src={cssIcon} alt="CSS"/>
                        </button>
                        <button>
                            <img src={jsIcon} alt="JavaScript"/>
                        </button>
                        <button>
                            <img src={pytorchIcon} alt="PyTorch"/>
                        </button>
                        <button>
                            <img src={cIcon} alt="C"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;