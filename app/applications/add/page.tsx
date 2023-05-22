'use client';
import { ApplicationStatus, Candidate } from '@/helpers/types';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, FormEvent } from 'react';

export default function AddApplication() {
  const router = useRouter();
  const [candidates, setCandidates]: [Array<Candidate>, Function] = useState(
    []
  );
  const [statuses, setStatuses]: [Array<ApplicationStatus>, Function] =
    useState([]);

  async function getCandidates() {
    const res = await fetch('https://wesleytheobald.com/api/cs340/candidates');
    const json = await res.json();
    setCandidates(json);
  }
  async function getStatus() {
    const res = await fetch(
      'https://wesleytheobald.com/api/cs340/application-statuses'
    );
    const json = await res.json();
    setStatuses(json);
  }

  async function add(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values: { date?: string | Date } = Object.fromEntries(data.entries());
    values.date = new Date().toISOString();
    values.date = `${values.date.slice(0, 10)} ${values.date.slice(11, 16)}:00`;
    const json = JSON.stringify(values);
    const res = await fetch(
      'https://wesleytheobald.com/api/cs340/applications',
      {
        method: 'POST',
        body: json,
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((res) => res.json());
    router.push('/applications');
  }
  useEffect(() => {
    getCandidates();
    getStatus();
  }, []);
  const query = useSearchParams();
  const data = query.get('data');
  let posting;
  if (data) {
    posting = JSON.parse(data);
  }
  function formatDate(date: Date) {
    return (
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      date.getDate() +
      'T' +
      date.getHours().toString().padStart(2, '0') +
      ':' +
      date.getMinutes().toString().padStart(2, '0')
    );
  }
  const currentDate = formatDate(new Date());

  return (
    <>
      <h1>Add Application</h1>

      <form onSubmit={add}>
        <label>
          Company:
          <select disabled>
            <option value={posting.company_id}>{posting.company_name}</option>
          </select>
        </label>
        <label htmlFor="posting_id">
          Job Title:
          <input
            hidden
            type="number"
            name="posting_id"
            required
            readOnly
            defaultValue={posting.posting_id}
          />
          <select disabled>
            <option value={posting.posting_id}>{posting.job_title}</option>
          </select>
        </label>
        <label htmlFor="candidate_id">
          Candidate:
          <select name="candidate_id" required>
            {candidates.map((candidate) => (
              <option
                key={candidate.candidate_id}
                value={candidate.candidate_id}
              >
                {candidate.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="date">
          Date (GMT):
          <input
            type="datetime-local"
            name="date"
            defaultValue={currentDate}
            required
          />
        </label>
        <label htmlFor="status_id">
          Status:
          <select name="status_id" required>
            {statuses.map((status) => (
              <option key={status.status_id} value={status.status_id}>
                {status.message}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
