'use client';
import { useSearchParams } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';
import { useEffect, useState } from 'react';

export default function UpdatePosting() {
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
  useEffect(() => { });
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
        <label htmlFor="company">
          Posting:
          <select name="company" defaultValue={posting.company_name} required>
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
