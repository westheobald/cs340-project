'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';
import { useEffect, useState, FormEvent } from 'react';
import { Company } from '@/helpers/types';

export default function UpdatePosting() {
  const router = useRouter();
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  async function getData() {
    const res = await fetch('https://wesleytheobald.com/api/cs340/companies');
    const json = await res.json();
    setCompanies(json);
  }
  useEffect(() => {
    getData();
  }, []);
  const query = useSearchParams();
  const data = query.get('data');
  let posting;
  if (data) {
    posting = JSON.parse(data);
  }
  const startDate = new Date(posting.post_start);
  const endDate = new Date(posting.post_end);

  async function update(e: FormEvent<HTMLFormElement>) {
    const res = await handleSubmit(
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
          Posting:
          <select
            name="company_id"
            defaultValue={posting.company_name}
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
          Salary:
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
