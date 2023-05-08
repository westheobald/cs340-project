import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
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
      </ul>
    </nav>
  );
}
