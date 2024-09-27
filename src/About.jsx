import './Styles/About.css';
import reactIcon from './assets/react.svg';
import pythonIcon from './assets/python.png';
import tensorflowIcon from './assets/tensorflow.png';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import jsIcon from './assets/javascript.png';
import pytorchIcon from './assets/pytorch.png';
import cIcon from './assets/c.png';
import javaIcon from './assets/java.png';
import mongoIcon from './assets/mongo.png';

const About = () => {
    return (
        <div className="about">
            <div className="about_head">
                <h1 className='head'>About</h1>
            </div>
            <div className="about_content">
                <div className="about_body">
                    <p className='aboutText'>With a passion for solving complex problems through AI and machine learning,
                            I’m a third year Computer Science student at Cal Poly San Luis Obispo, specializing in
                            AI and Machine Learning. I enjoy combining technical skills with creativity,
                            especially when working with technologies like Python, TensorFlow, and React.
                            I’m driven by curiosity and a desire to constantly learn, whether I’m building models to
                            analyze genetic data or crafting intuitive user experiences. When I’m not coding,
                            you can find me trail running, exploring new tech, or skiing.</p>
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
                    <button>
                        <img src={javaIcon} alt="Java"/>
                    </button>
                    <button>
                        <img src={mongoIcon} alt="MongoDB"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;