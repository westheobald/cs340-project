'use client';
import handleSubmit from '@/helpers/formSubmit';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AddApplication() {
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
        <label htmlFor="company_id">
          Company:
          <select name="company_id" required disabled>
            <option value={posting.company_id}>{posting.company_name}</option>
          </select>
        </label>
        <label htmlFor="posting_id">
          Job Title:
          <select name="posting_id" required disabled>
            <option value={posting.posting_id}>{posting.job_title}</option>
          </select>
        </label>
        <label htmlFor="candidate">
          Candidate:
          <select name="candidate" required>
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
        <label htmlFor="submitted">
          Submitted:
          <select name="submitted" required>
            <option>True</option>
            <option>False</option>
          </select>
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
