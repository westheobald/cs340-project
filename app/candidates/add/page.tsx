'use client';
import { useEffect, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import handleSubmit from '@/helpers/formSubmit';
import { Recruiter } from '@/helpers/types';

export default function AddCandidate() {
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
  async function add(e: FormEvent<HTMLFormElement>) {
    await handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/candidates',
      'POST'
    );
    router.push('/candidates');
  }

  useEffect(() => {
    getRecruiters();
  }, []);

  return (
    <>
      <h1>Add a Candidate</h1>
      <form onSubmit={add}>
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
