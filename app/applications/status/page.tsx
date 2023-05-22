'use client';
import Link from 'next/link';
import { ApplicationStatus } from '@/helpers/types';
import { useEffect, useState } from 'react';
export default function ApplicationStatus() {
  const [statuses, setStatuses]: [Array<ApplicationStatus>, Function] =
    useState([]);

  async function getData() {
    const res = await fetch(
      'https://wesleytheobald.com/api/cs340/application-statuses'
    );
    const json = await res.json();
    setStatuses(json);
  }
  useEffect(() => {
    getData();
  }, []);

   /* function deleteRow(id: number, name: string): void {
    async function deleteId(id: number) {
      const res = await fetch(
        `https://wesleytheobald.com/api/cs340/application-statuses/${id}`,
        { method: 'DELETE' }
      );
      getData();
    }
    if (confirm(`Are you sure you want to delete status: ${name}?`)) {
      deleteId(id);
    }
  } */
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
        {/* <td onClick={(_) => deleteRow(status_id, message)}>DELETE</td> */}
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
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>{statuses.map((el) => createRow(el))}</tbody>
      </table>
    </>
  );
}
