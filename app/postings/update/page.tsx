'use client';
import { useEffect, useState, FormEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import handleSubmit from '@/helpers/formSubmit';
import { Company, Posting } from '@/helpers/types';

export default function UpdatePosting() {
  const router = useRouter();
  const [company, setCompany]: [number, Function] = useState(0);
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);

  async function getCompanies() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/companies'
    ).then((res) => res.json());
    setCompanies(json);
    if (posting) {
      setCompany(posting.company_id);
    }
  }
  useEffect(() => {
    getCompanies();
  }, []);

  const query = useSearchParams();
  const data = query.get('data');
  let posting: undefined | Posting;
  if (data) posting = JSON.parse(data);
  if (!posting) return;
  const startDate = new Date(posting.post_start);
  const endDate = new Date(posting.post_end);
  async function update(e: FormEvent<HTMLFormElement>) {
    await handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/postings',
      'PUT'
    );
    router.push('/postings');
  }
  return (
    <>
      <h1>Update Posting</h1>
      <form onSubmit={update}>
        <label htmlFor="posting_id">
          <input
            type="number"
            name="posting_id"
            defaultValue={posting.posting_id}
            readOnly
            required
            hidden
          />
        </label>
        <label htmlFor="company_id">
          Company:
          <select
            name="company_id"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          >
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
            defaultValue={posting.job_title}
            required
          />
        </label>
        <label htmlFor="salary">
          Salary (in thousands):
          <input
            type="number"
            min="0"
            name="salary"
            defaultValue={posting.salary}
            required
          />
        </label>
        <label htmlFor="post_start">
          Post Start:
          <input
            type="date"
            name="post_start"
            defaultValue={startDate.toISOString().slice(0, 10)}
            required
          />
        </label>
        <label htmlFor="post_end">
          Post End:
          <input
            type="date"
            name="post_end"
            defaultValue={endDate.toISOString().slice(0, 10)}
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
