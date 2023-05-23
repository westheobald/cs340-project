'use client';
import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';

import { ApplicationStatus } from '@/helpers/types';

export default function ApplicationStatus() {
  const [statuses, setStatuses]: [Array<ApplicationStatus>, Function] =
    useState([]);

  async function getStatuses() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/application-statuses'
    ).then((res) => res.json());
    setStatuses(json);
  }
  useEffect(() => {
    getStatuses();
  }, []);

  function createRow(statusInfo: ApplicationStatus): ReactElement {
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
          </tr>
        </thead>
        <tbody>{statuses.map((el) => createRow(el))}</tbody>
      </table>
    </>
  );
}
