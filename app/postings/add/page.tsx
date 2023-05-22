'use client';
import handleSubmit from '@/helpers/formSubmit';
import { Company } from '@/helpers/types';
import { useEffect, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPosting() {
  const router = useRouter();
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  async function getData() {
    const res = await fetch('https://wesleytheobald.com/api/cs340/companies');
    const json = await res.json();
    setCompanies(json);
  }
  async function add(e: FormEvent<HTMLFormElement>) {
    await handleSubmit(e, 'https://wesleytheobald.com/api/cs340/postings', 'POST');
    router.push('/postings');
  }
  useEffect(() => {
    getData();
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
          Salary:
          <input type="number" min="0" name="salary" required />
        </label>
        <label htmlFor="post_start">
          Post Start:
          <input type="date" name="post_start" required />
        </label>
        <label htmlFor="post_end">
          Post End:
          <input type="date" name="post_end" required />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
