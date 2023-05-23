'use client';
import { useEffect, useState, FormEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import handleSubmit from '@/helpers/formSubmit';
import { Recruiter } from '@/helpers/types';

export default function UpdateCandidate() {
  const router = useRouter();
  const [recruiters, setRecruiters]: [Array<Recruiter>, Function] = useState(
    []
  );
  async function getRecruiters() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/recruiters'
    ).then((res) => res.json());
    setRecruiters(json);
  }
  useEffect(() => {
    getRecruiters();
  }, []);

  const query = useSearchParams();
  const data = query.get('data');
  let candidate;
  if (data) candidate = JSON.parse(data);

  async function update(e: FormEvent<HTMLFormElement>) {
    await handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/candidates',
      'PUT'
    );
    router.push('/candidates');
  }

  return (
    <>
      <h1>Update Candidate</h1>
      <form onSubmit={update}>
        <label htmlFor="candidate_id">
          <input
            type="number"
            name="candidate_id"
            defaultValue={candidate.candidate_id}
            readOnly
            required
            hidden
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
          <select name="recruiter_id">
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
