import './Styles/Experience.css';

const experiences = [
    {
        title: 'Teaching Assistant',
        company: 'Cal Poly, Computer Science Department',
        date: 'Sep 2024 - Present',
        description: 'Assisted students during lab sessions to improve their software engineering skills, hosted office hours for one-on-one tutoring, and collaborated with Professor Kubiak to grade and evaluate student work fairly.',
    },
    {
        title: 'Machine Learning Researcher',
        company: 'Cal Poly, Animal Science Department',
        date: 'Feb 2024 - Present',
        description: 'Developed predictive models (Random Forest, BERT) achieving 85% accuracy in detecting mastitis in dairy cattle. Optimized genome processing, reducing file sizes by 50%. Identified key SNPs for disease prevention and breeding strategies. Presented research at the Animal Science Research Symposium, with plans for the PAG 32 Conference.',
    },
    {
        title: 'Teaching Assistant',
        company: 'CodePlatoon',
        date: 'Feb 2024 - April 2024',
        description: 'Led one-on-one consultations and group discussions, reinforcing key concepts and fostering a collaborative learning environment to enhance comprehension and mastery of course material.',
    },
];

const JobExperience = () => {
    return (
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
    );
};

export default JobExperience;
