'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';
import { Recruiter } from '@/helpers/types';
import { useEffect, useState, FormEvent } from 'react';

export default function UpdateCandidate() {
  const router = useRouter();
  const [recruiters, setRecruiters]: [Array<Recruiter>, Function] = useState(
    []
  );
  async function getData() {
    const res = await fetch('https://wesleytheobald.com/api/cs340/recruiters');
    const json = await res.json();
    setRecruiters(json);
  }
  useEffect(() => {
    getData();
  }, []);
  const query = useSearchParams();
  const data = query.get('data');
  let candidate;
  if (data) {
    candidate = JSON.parse(data);
  }
  async function update(e: FormEvent<HTMLFormElement>) {
    const res = await handleSubmit(
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
