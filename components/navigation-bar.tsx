import styles from './navigation-bar.module.css';
import Link from 'next/link';

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
      </ul>
    </nav>
  );
}
