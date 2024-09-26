import './Styles/About.css';
import reactIcon from './assets/react.svg';
import pythonIcon from './assets/python.png';

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
                        <img src="/path/to/tensorflow-icon.png" alt="TensorFlow"/>
                    </button>
                    <button>
                        <img src="/path/to/js-icon.png" alt="JavaScript"/>
                    </button>
                    <button>
                        <img src="/path/to/ml-icon.png" alt="Machine Learning"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;