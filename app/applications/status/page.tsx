import React from 'react';
import Link from 'next/link';

export default function ApplicationStatus() {
  return (
    <>
      <h1>Application Statuses</h1>
      <Link href="/applications/status/add">Add Application Status</Link>
      <table>
        <thead>
          <tr>
            <th>Message</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Submitted</td>
            <td><Link href="applications/status/edit">EDIT</Link></td>
            <td>DELETE</td>
          </tr>
          <tr>
            <td>Review/Pending</td>
            <td><Link href="applications/status/edit">EDIT</Link></td>
            <td>DELETE</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
