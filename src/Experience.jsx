import './Styles/Experience.css';

const experiences = [
    {
        title: 'Automation Engineer Intern',
        company: 'Novo Nordisk',
        date: 'May 2025 - Current',
        description: 'Engineered a dynamic error reporting tool using Python and Pandas to automate error detection. Utilized SQL for data management and analysis in large-scale databases. Redesigned and deployed critical workflows in Syncade MES, integrating new data pipelines to enhance manufacturing efficiency.',
    },
    {
        title: 'Machine Learning Researcher',
        company: 'Cal Poly, Computer Science Department',
        date: 'Nov 2024 - Current',
        description: 'Refined machine learning models like Random Forest and AdaBoost to predict green card applicant wait times, increasing accuracy by over 10%. Collaborated with front-end developers to integrate these predictive models into a user-friendly interface.',
    },
    {
        title: 'Teaching Assistant - Intro to Software Engineering',
        company: 'Cal Poly, Computer Science Department',
        date: 'Sept 2024 - Current',
        description: 'Mentored over 90 students in software engineering fundamentals, including agile methodologies and Git/Github. Graded and provided detailed feedback on 200+ assignments and offered direct student support through office hours.',
    },
    {
        title: 'Machine Learning Researcher',
        company: 'Cal Poly, Animal Science Department',
        date: 'Feb 2024 - Current',
        description: 'Developed predictive models (Random Forest, BERT) achieving 74% accuracy in detecting mastitis in dairy cattle. Implemented software to compress cattle genomes, reducing file size by over 50%. Identified key SNPs to enhance disease prevention and presented research at the Cal Poly Animal Science Research Symposium.',
    },
];

const JobExperience = () => {
    return (
        <section id="experience">
            <div className="job-experience">
                <h2>Job Experience</h2>
                <div className="timeline">
                    {experiences.map((experience, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-content">
                                <div className="title-date">
                                    <h3>{experience.title}</h3>
                                    <p className="date">{experience.date}</p>
                                </div>
                                <h4>{experience.company}</h4>
                                <p className="description">{experience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobExperience;
