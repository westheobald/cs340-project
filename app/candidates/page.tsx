'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Candidate } from '@/helpers/types';

import { sampleCandidates } from '@/helpers/sampleData';

export default function Candidates() {
  const [candidates, setCandidates]: [Array<Candidate>, Function] = useState([]);
  useEffect(() => {
    setCandidates(sampleCandidates)
  }, []);

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
        <tbody>{candidates.map((candidate) => createRow(candidate))}</tbody>
      </table>
    </>
  );
}
