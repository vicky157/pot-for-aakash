import Layout from '../components/Layout';
import styles from '../styles/Research.module.css';

const experiences = [
  {
    id: 1,
    role: 'Research Assistant',
    year: '2023 - Present',
    details: [
      'Worked on single-cell RNA sequencing analysis.',
      'Collaborated with team members to publish a paper.',
      'Presented findings at national conferences.'
    ]
  },
  {
    id: 2,
    role: 'Intern',
    year: '2022 - 2023',
    details: [
      'Developed bioinformatics pipelines.',
      'Analyzed genomic data for disease research.',
      'Created data visualizations for reports.'
    ]
  },
  {
    id: 3,
    role: 'Graduate Assistant',
    year: '2021 - 2022',
    details: [
      'Assisted in teaching bioinformatics courses.',
      'Conducted lab sessions and helped students.',
      'Graded assignments and exams.'
    ]
  },
  {
    id: 4,
    role: 'Junior Researcher',
    year: '2020 - 2021',
    details: [
      'Participated in research on genetic algorithms.',
      'Co-authored a research paper on data analysis.',
      'Presented work at university symposium.'
    ]
  },
];

const coursework = [
  'Bioinformatics Algorithms',
  'Machine Learning for Biologists',
  'Genomic Data Science',
  'Computational Biology',
  'Advanced Bioinformatics',
  'Systems Biology',
  'Data Visualization in R',
  'High Performance Computing',
  'Statistics for Bioinformatics',
  'Molecular Biology for Computer Scientists'
];

export default function Research() {
  return (
    <Layout>
      <div className={styles.research}>
        {experiences.map(exp => (
          <div key={exp.id} className={styles.role}>
            <h2>{exp.role}</h2>
            <span>{exp.year}</span>
            <ul>
              {exp.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.coursework}>
          <h2>Coursework</h2>
          <ul>
            {coursework.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
