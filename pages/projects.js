import Layout from '../components/Layout';
import styles from '../styles/Projects.module.css';

const projects = [
  { id: 1, title: 'Project One', description: 'Overview of project one...', details: ['Detail 1', 'Detail 2', 'Detail 3'], link: 'https://github.com/project-one' },
  { id: 2, title: 'Project Two', description: 'Overview of project two...', details: ['Detail 1', 'Detail 2', 'Detail 3'], link: 'https://github.com/project-two' },
  { id: 3, title: 'Project Three', description: 'Overview of project three...', details: ['Detail 1', 'Detail 2', 'Detail 3'], link: 'https://github.com/project-three' },
  { id: 4, title: 'Project Four', description: 'Overview of project four...', details: ['Detail 1', 'Detail 2', 'Detail 3'], link: 'https://github.com/project-four' },
  { id: 5, title: 'Project Five', description: 'Overview of project five...', details: ['Detail 1', 'Detail 2', 'Detail 3'], link: 'https://github.com/project-five' },
  { id: 6, title: 'Project Six', description: 'Overview of project six...', details: ['Detail 1', 'Detail 2', 'Detail 3'], link: 'https://github.com/project-six' },
  { id: 7, title: 'Project Seven', description: 'Overview of project seven...', details: ['Detail 1', 'Detail 2', 'Detail 3'], link: 'https://github.com/project-seven' },
  { id: 8, title: 'Project Eight', description: 'Overview of project eight...', details: ['Detail 1', 'Detail 2', 'Detail 3'], link: 'https://github.com/project-eight' },
  { id: 9, title: 'Project Nine', description: 'Overview of project nine...', details: ['Detail 1', 'Detail 2', 'Detail 3'], link: 'https://github.com/project-nine' },
];

export default function Projects() {
  return (
    <Layout>
      <div className={styles.projects}>
        {projects.map(project => (
          <div key={project.id} className={styles.project}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
