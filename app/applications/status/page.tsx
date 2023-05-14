'use client';
import React from 'react';
import Link from 'next/link';

export default function ApplicationStatus() {
  type Status = {
    status_id: number;
    message: string;
  };
  const sampleApplicationStatus = [
    {
      status_id: 1,
      message: 'submitted',
    },
    {
      status_id: 2,
      message: 'review/pending',
    },
    {
      status_id: 3,
      message: 'completed',
    },
    { status_id: 4, message: 'offer extended' },
    { status_id: 5, message: 'not interested' },
  ];
  function deleteRow(id: number, message: string): void {
    if (confirm(`Are you sure you want to delete status: ${message}?`)) {
      // delete
    }
  }
  function createRow(statusInfo: Status) {
    const { status_id, message } = statusInfo;
    return (
      <tr>
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
        <tbody>{sampleApplicationStatus.map((el) => createRow(el))}</tbody>
      </table>
    </>
  );
}
