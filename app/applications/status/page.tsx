'use client';
import Link from 'next/link';
import { ApplicationStatus } from '@/helpers/types';
import { sampleApplicationStatus } from '@/helpers/sampleData';
import { useEffect, useState } from 'react';
export default function ApplicationStatus() {
  const [statuses, setStatuses]: [Array<ApplicationStatus>, Function] =
    useState([]);

  useEffect(() => {
    setStatuses(sampleApplicationStatus);
  }, []);

  function deleteRow(id: number, message: string): void {
    if (confirm(`Are you sure you want to delete status: ${message}?`)) {
      // delete
    }
  }
  function createRow(statusInfo: ApplicationStatus) {
    const { status_id, message } = statusInfo;
    return (
      <tr key={status_id}>
        <td>{message}</td>
        <td>
          <Link
            href={{
              pathname: '/applications/status/update',
              query: { data: JSON.stringify(statusInfo) },
            }}
          >
            EDIT
          </Link>
        </td>
        <td onClick={(_) => deleteRow(status_id, message)}>DELETE</td>
      </tr>
    );
  }
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
        <tbody>{statuses.map((el) => createRow(el))}</tbody>
      </table>
    </>
  );
}
