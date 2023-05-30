'use client';
import { useEffect, useState, FormEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import handleSubmit from '@/helpers/formSubmit';
import { Candidate, Recruiter } from '@/helpers/types';

export default function UpdateCandidate() {
  const router = useRouter();
  const [recruiters, setRecruiters]: [Array<Recruiter>, Function] = useState(
    []
  );
  const [recruiter, setRecruiter]: [number, Function] = useState(0);

  async function getRecruiters() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/recruiters'
    ).then((res) => res.json());
    setRecruiters(json);
    if (candidate) {
      setRecruiter(candidate.recruiter_id);
    }
  }
  useEffect(() => {
    getRecruiters();
  }, []);

  const query = useSearchParams();
  const data = query.get('data');
  let candidate: undefined | Candidate;
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
            defaultValue={candidate ? candidate.candidate_id : undefined}
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
            defaultValue={candidate ? candidate.name : undefined}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={candidate ? candidate.email : undefined}
            required
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            type="tel"
            name="phone"
            defaultValue={candidate ? candidate.phone : undefined}
            required
          />
        </label>
        <label htmlFor="recruiter_id">
          Recruiter:
          <select
            name="recruiter_id"
            value={recruiter}
            onChange={(e) => setRecruiter(e.target.value)}
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
