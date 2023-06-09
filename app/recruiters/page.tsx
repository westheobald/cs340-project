'use client';
import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';

import { Recruiter } from '@/helpers/types'; // Recruiter object type

export default function Recruiters() {
  const [recruiters, setRecruiters]: [Array<Recruiter>, Function] = useState(
    []
  );
  async function getRecruiters() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/recruiters'
    ).then((res) => res.json());
    setRecruiters(json);
  }

  useEffect(() => {
    getRecruiters();
  }, []);

  async function deleteRow(id: number, name: string) {
    if (confirm(`Are you sure you want to delete recruiter: ${name}?`)) {
      await fetch(`https://wesleytheobald.com/api/cs340/recruiters/${id}`, {
        method: 'DELETE',
      });
      await getRecruiters();
    }
  }

  function createRow(recruiterInfo: Recruiter): ReactElement {
    const { recruiter_id, name, time_zone, commission } = recruiterInfo;
    return (
      <tr key={recruiter_id}>
        <td>{name}</td>
        <td>{time_zone}</td>
        <td>{commission}</td>
        <td>
          <Link
            href={{
              pathname: 'recruiters/update',
              query: { data: JSON.stringify(recruiterInfo) },
            }}
          >
            EDIT
          </Link>
        </td>
        <td onClick={(_) => deleteRow(recruiter_id, name)}>DELETE</td>
      </tr>
    );
  }
  return (
    <>
      <h1>Recruiters</h1>
      <Link href="/recruiters/add">Add Recruiter</Link>
      <table>
        <caption>Current Recruiters</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Zone</th>
            <th>Commission</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{recruiters.map((el) => createRow(el))}</tbody>
      </table>
    </>
  );
}
