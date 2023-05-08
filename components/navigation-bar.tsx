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
          <Link href="/companies">View Companies</Link>
        </li>
      </ul>
    </nav>
  );
}
