'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Candidate } from '@/helpers/types';

export default function Candidates() {
  const [candidates, setCandidates]: [Array<Candidate>, Function] = useState(
    []
  );
  async function getData() {
    const res = await fetch('https://wesleytheobald.com/api/cs340/candidates');
    const json = await res.json();
    setCandidates(json);
  }
  useEffect(() => {
    getData();
  }, []);

  function deleteRow(id: number, name: string): void {
    async function deleteId(id: number) {
      const res = await fetch(
        `https://wesleytheobald.com/api/cs340/candidates/${id}`,
        { method: 'DELETE' }
      );
      getData();
    }
    if (confirm(`Are you sure you want to delete candidate: ${name}?`)) {
      deleteId(id);
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
