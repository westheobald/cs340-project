'use client';
import { useSearchParams } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';
import { useEffect, useState } from 'react';
import { Company } from '@/helpers/types';
import { sampleCompanies } from '@/helpers/sampleData';

export default function UpdatePosting() {
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  useEffect(() => {
    setCompanies(sampleCompanies);
  }, []);
  const query = useSearchParams();
  const data = query.get('data');
  let posting;
  if (data) {
    posting = JSON.parse(data);
  }
  return (
    <>
      <h1>Update Posting</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http://')}>
        <label htmlFor="posting_id">
          ID:
          <input
            type="number"
            name="posting_id"
            defaultValue={posting.posting_id}
            readOnly
            required
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
            defaultValue={posting.post_start}
            required
          />
        </label>
        <label htmlFor="post_end">
          Post End:
          <input
            type="date"
            name="post_end"
            defaultValue={posting.post_end}
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
