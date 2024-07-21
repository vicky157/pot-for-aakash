import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.intro}>
        <Image src="/profile.jpg" alt="Your Name" width={150} height={150} className={styles.profileImage} />
        <h1>I’m Vikash.</h1>
        <p>Machine Learning and Artificial Intelligence Researcher</p>
        <div className={styles.links}>
          <a href="https://github.com/vicky157" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vikash-singh-937aa7195/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a> */}
        </div>
        <a href="/resume.pdf" download className={styles.button}>Download Resume</a>
      </div>
    </Layout>
  );
}
