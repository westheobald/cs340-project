import React from 'react';
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
      </ul>
    </nav>
  );
}
