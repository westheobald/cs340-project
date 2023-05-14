'use client';
import handleSubmit from '@/helpers/formSubmit';
import { useEffect, useState } from 'react';
export default function AddPosting() {
  type Company = {
    company_id: number;
    name: string;
    city: string;
    address: string;
    phone: string;
    time_zone: string;
    industry: string;
  };
  const sampleCompanies: Array<Company> = [
    {
      company_id: 1,
      name: 'Reilly and Sons',
      city: 'Luwu',
      address: '77175 Hintze Pass',
      phone: '442-906-8682',
      time_zone: '-11:00',
      industry: 'Law',
    },
    {
      company_id: 2,
      name: 'Lowe, Larson and Brown',
      city: 'Fengshan',
      address: '3551 Everett Terrace',
      phone: '669-886-1182',
      time_zone: '-06:00',
      industry: 'Construction',
    },
    {
      company_id: 3,
      name: 'Green-Ziemann',
      city: 'Jingtan',
      address: '2 Basil Parkway',
      phone: '952-439-1592',
      time_zone: '+01:00',
      industry: 'Building Products',
    },
  ];

  const [companies, setCompanies] = useState(sampleCompanies);
  useEffect(() => {
  });
  return (
    <>
      <h1>Add a Posting</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http://')}>
        <label htmlFor="company">
          Company:
          <select name="company" required>
            {companies.map((company: Company) => (
              <option key={company.company_id} value={company.company_id}>
                {company.name}
              </option>
            ))}
            <option>Reily and Sons</option>
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
