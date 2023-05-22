'use client';
import handleSubmit from '@/helpers/formSubmit';
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
    await handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/applications',
      'POST'
    );
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
          Date:
          <input type="datetime-local" name="date" required />
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
