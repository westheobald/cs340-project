'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Recruiters() {
  type Recruiter = {
    recruiter_id: number;
    name: string;
    time_zone: string;
    commission: number;
  };
  const sampleRecruiters = [
    {
      recruiter_id: 1,
      name: 'Kristian Corkitt',
      time_zone: '+01:00',
      commission: 15,
    },
    {
      recruiter_id: 2,
      name: 'Randal Sibbert',
      time_zone: '-08:00',
      commission: 10,
    },
    {
      recruiter_id: 3,
      name: 'Jeanine Kyles',
      time_zone: '-03:00',
      commission: 19,
    },
    {
      recruiter_id: 4,
      name: 'Dela Austick',
      time_zone: '+06:00',
      commission: 5,
    },
  ];
  const [recruiters, setRecruiters] = useState(sampleRecruiters);

  useEffect(() => {
    // setRecruiters()
  });

  function deleteRow(id: number, name: string): void {
    if (confirm(`Are you sure you want to delete recruiter: ${name}?`)) {
      // delete
    }
  }

  function createRow(recruiterInfo: Recruiter) {
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
