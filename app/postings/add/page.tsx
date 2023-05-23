'use client';
import { useEffect, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import handleSubmit from '@/helpers/formSubmit';
import { Company } from '@/helpers/types';

export default function AddPosting() {
  const router = useRouter();
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  async function getCompanies() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/companies'
    ).then((res) => res.json());
    setCompanies(json);
  }
  async function add(e: FormEvent<HTMLFormElement>) {
    await handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/postings',
      'POST'
    );
    router.push('/postings');
  }
  useEffect(() => {
    getCompanies();
  }, []);
  return (
    <>
      <h1>Add a Posting</h1>
      <form onSubmit={add}>
        <label htmlFor="company_id">
          Company:
          <select name="company_id" required>
            {companies.map((company: Company) => (
              <option key={company.company_id} value={company.company_id}>
                {company.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="job_title">
          Job Title:
          <input
            type="text"
            name="job_title"
            placeholder="Job Title"
            required
          />
        </label>
        <label htmlFor="salary">
          Salary (in thousands):
          <input type="number" min="0" name="salary" required />
        </label>
        <label htmlFor="post_start">
          Post Start:
          <input
            type="date"
            name="post_start"
            defaultValue={new Date().toISOString().slice(0, 10)}
            required
          />
        </label>
        <label htmlFor="post_end">
          Post End:
          <input
            type="date"
            name="post_end"
            defaultValue={new Date().toISOString().slice(0, 10)}
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
