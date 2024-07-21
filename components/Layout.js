import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p>© 2024 Vikash</p>
        <p>{new Date().toLocaleDateString()}</p>
        <div className={styles.blinkingDot}></div>
      </footer>
      <main className={styles.mainContent}>{children}</main>
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/education">Education</Link>
        <Link href="/research">Research</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Layout;
