import Link from 'next/link';
import styles from './navigation-bar.module.css';

export default function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href="/companies">Companies</Link>
        </li>
        <li>
          <Link href="/recruiters">Recruiters</Link>
        </li>
        <li>
          <Link href="/candidates">Candidates</Link>
        </li>
        <li>
          <Link href="/postings">Postings</Link>
        </li>
        <li>
          <Link href="/applications">Applications</Link>
        </li>
        <li>
          <Link href="applications/status">Application Status</Link>
        </li>
      </ul>
    </nav>
  );
}
