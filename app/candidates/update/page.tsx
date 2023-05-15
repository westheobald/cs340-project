'use client';
import { useSearchParams } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';
import { Recruiter } from '@/helpers/types';
import { useEffect, useState } from 'react';
import { sampleRecruiters } from '@/helpers/sampleData';

export default function UpdateCandidate() {
  const [recruiters, setRecruiters]: [Array<Recruiter>, Function] = useState(
    []
  );
  useEffect(() => {
    setRecruiters(sampleRecruiters);
  }, []);
  const query = useSearchParams();
  const data = query.get('data');
  let candidate;
  if (data) {
    candidate = JSON.parse(data);
  }
  const [recruiter_id, setRecruiterId]: [number, Function] = useState(
    candidate.recruiter_id
  );

  return (
    <>
      <h1>Update Candidate</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http:')}>
        <label htmlFor="candidate_id">
          ID:
          <input
            type="number"
            name="candidate_id"
            defaultValue={candidate.candidate_id}
            readOnly
            required
          />
        </label>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={candidate.name}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={candidate.email}
            required
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            type="tel"
            name="phone"
            defaultValue={candidate.phone}
            required
          />
        </label>
        <label htmlFor="recruiter_id">
          Recruiter:
          <select
            name="recrtuier_id"
            value={recruiter_id}
            onChange={(e) => setRecruiterId(e.target.value)}
          >
            <option value="">-</option>
            {recruiters.map((recruiter) => (
              <option
                key={recruiter.recruiter_id}
                value={recruiter.recruiter_id}
              >
                {recruiter.name}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
