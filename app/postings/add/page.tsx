'use client';
import handleSubmit from '@/helpers/formSubmit';
import { sampleCompanies } from '@/helpers/sampleData';
import { Company } from '@/helpers/types';
import { useEffect, useState } from 'react';

export default function AddPosting() {
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  useEffect(() => {
    setCompanies(sampleCompanies);
  }, []);
  return (
    <>
      <h1>Add a Posting</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http://')}>
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
