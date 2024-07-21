import Layout from '../components/Layout';
import styles from '../styles/Education.module.css';

const education = [
  { id: 1, title: 'Bachelor of Technology in Civil Engineering with Minor in Computer Science and Artificial Intelligence', school: 'Indian Institute of Technology Mandi', year: '2019', details: ['Graduated with Silver Medal', 'Relevant coursework: Data Structures and Algorithms, Machine Learning and Applications, Deep Learning', 'Completed a capstone project on Machine Learning and Soil Engineering'] },
  { id: 2, title: 'Master of Science in Computer Science', school: 'Case Western Reserve University', year: '2023', details: ['Worked on ', 'Relevant coursework: Genomic Data Science, Computational Biology', 'Published two research papers'] },
  { id: 3, title: 'PhD in Computational Biology', school: 'University C', year: '2026 (Expected)', details: ['Research focus: Computational methods for genomics', 'Relevant coursework: Advanced Bioinformatics, Systems Biology', 'Expected to defend dissertation in 2026'] },
];

export default function Education() {
  return (
    <Layout>
      <div className={styles.education}>
        {education.map(edu => (
          <div key={edu.id} className={styles.degree}>
            <h2>{edu.title}</h2>
            <p>{edu.school}</p>
            <span>{edu.year}</span>
            <ul>
              {edu.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}
