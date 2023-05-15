'use client';
import handleSubmit from '@/helpers/formSubmit';
import { sampleRecruiters } from '@/helpers/sampleData';
import { Recruiter } from '@/helpers/types';
import { useEffect, useState } from 'react';
export default function AddCandidate() {
  const [recruiters, setRecruiters]: [Array<Recruiter>, Function] = useState(
    []
  );
  useEffect(() => {
    setRecruiters(sampleRecruiters);
  }, []);
  return (
    <>
      <h1>Add a Candidate</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http://')}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Name" required />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" placeholder="Email" required />
        </label>
        <label htmlFor="phone">
          Phone:
          <input type="tel" name="phone" required />
        </label>
        <label htmlFor="recruiter_id">
          Recruiter:
          <select name="recrtuier_id">
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
