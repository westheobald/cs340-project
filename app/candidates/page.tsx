'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Candidates() {
  type Candidate = {
    candidate_id: number;
    name: string;
    email: string;
    phone: string;
    recruiter_id: number;
    recruiter: string;
  };
  const sampleCandidates: Array<Candidate> = [
    {
      candidate_id: 1,
      name: 'Jae Shevlane',
      email: 'jaeshevlane@gmail.com',
      phone: '857-229-2289',
      recruiter_id: 1,
      recruiter: 'Kristian Corkitt',
    },
    {
      candidate_id: 2,
      name: 'Cathy Shackelton',
      email: 'cathyshackelton@gmail.com',
      phone: '376-590-2555',
      recruiter_id: 2,
      recruiter: 'Randal Sibbert',
    },
    {
      candidate_id: 3,
      name: 'Gilda Kermitt',
      email: 'gildakermitt@gmail.com',
      phone: '729-262-2724',
      recruiter_id: 3,
      recruiter: 'Jeanine Kyles',
    },
    {
      candidate_id: 4,
      name: 'Avram Balcombe',
      email: 'avrambalcombe@gmail.com',
      phone: '660-973-9930',
      recruiter_id: 4,
      recruiter: 'Dela Austick',
    },
  ];
  const [candidates, setCandidates] = useState(sampleCandidates);
  useEffect(() => {
    // setCandidates(array)
  });

  function deleteRow(id: number, name: string): void {
    if (confirm(`Are you sure you want to delete candidate: ${name}?`)) {
      // delete
    }
  }
  function createRow(candidateInfo: Candidate) {
    const { name, email, phone, recruiter, candidate_id } = candidateInfo;
    return (
      <tr key={candidate_id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{recruiter}</td>
        <td>
          <Link
            href={{
              pathname: '/candidates/update',
              query: { data: JSON.stringify(candidateInfo) },
            }}
          >
            EDIT
          </Link>
        </td>
        <td onClick={(_) => deleteRow(candidate_id, name)}>DELETE</td>
      </tr>
    );
  }

  return (
    <>
      <h1>Candidates</h1>
      <Link href="/candidates/add">Add Candidate</Link>
      <table>
        <caption>Current Candidates</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Recruiter</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => createRow(candidate))}
        </tbody>
      </table>
    </>
  );
}
