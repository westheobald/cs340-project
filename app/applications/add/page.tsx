'use client';
import handleSubmit from '@/helpers/formSubmit';
import { sampleCandidates } from '@/helpers/sampleData';
import { Candidate } from '@/helpers/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AddApplication() {
  const [candidates, setCandidates]: [Array<Candidate>, Function] = useState(
    []
  );
  useEffect(() => {
    setCandidates(sampleCandidates);
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

      <form onSubmit={(e) => handleSubmit(e, 'http:')}>
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
          <input type="date" name="date" required />
        </label>
        <label htmlFor="status">
          Status:
          <select name="status" required>
            <option>Submitted</option>
            <option>Review/Pending</option>
            <option>Completed</option>
            <option>Offer Extended</option>
            <option>Not Interested</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
