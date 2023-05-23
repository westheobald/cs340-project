'use client';
import { useState, useEffect, ReactElement } from 'react';
import Link from 'next/link';

import { Candidate } from '@/helpers/types';

export default function Candidates() {
  const [candidates, setCandidates]: [Array<Candidate>, Function] = useState(
    []
  );
  async function getCandidates() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/candidates'
    ).then((res) => res.json());
    setCandidates(json);
  }
  useEffect(() => {
    getCandidates();
  }, []);

  async function deleteRow(id: number, name: string) {
    if (confirm(`Are you sure you want to delete candidate: ${name}?`)) {
      await fetch(`https://wesleytheobald.com/api/cs340/candidates/${id}`, {
        method: 'DELETE',
      });
      getCandidates();
    }
  }
  function createRow(candidateInfo: Candidate): ReactElement {
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
