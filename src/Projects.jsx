import './Styles/Projects.css';
import project1Image from './assets/project1.png';


const projects = [
    {
        title: 'Fast-Select',
        description: 'A high-performance Python library powered by Numba and CUDA, offering accelerated algorithms for feature selection. Initially built to optimize the complete Relief family of algorithms, fast-select aims to expand and accelerate a wide range of feature selection methods to empower machine learning on large-scale datasets.',
        screenshot: project1Image,
        githubLink: 'https://github.com/GavinLynch04/FastSelect',
        livePreview: 'https://pypi.org/project/fast-select/'
    },
    {
        title: 'QuickSplit',
        description: 'This project is designed to help split receipts among multiple different people, and make the task of divying up receipts much easier. Includes the ability to upload or capture a picture of a receipt, where it will be processed for easier understanding and spliting by you. QuickSplit implements VeryFi API technology for its OCR/Receipt processing.',
        screenshot: project1Image,
        githubLink: 'https://github.com/GavinLynch04/CSC307-Receipt-App',
        livePreview: 'https://www.youtube.com/watch?v=ARngas-FN1k&t=102s'
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-section">
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.screenshot} alt={project.title} className="project-screenshot" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                                <a href={project.livePreview} target="_blank" rel="noopener noreferrer">Project Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </section>
    );
};

export default Projects;
