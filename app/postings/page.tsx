'use client';
import { sampleCompanies, samplePostings } from '@/helpers/sampleData';
import { Company, Posting } from '@/helpers/types';
import Link from 'next/link';
import { useState, useEffect, FormEvent } from 'react';

export default function Postings() {
  const [postings, setPostings]: [Array<Posting>, Function] = useState([]);
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  useEffect(() => {
    setPostings(samplePostings);
    setCompanies(sampleCompanies);
  }, []);

  function filter(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const company_id = data.get('filter');
    console.log(company_id);
    // filter then
    // setPostings()
  }

  function deleteRow(id: number, name: string, job_title: string): void {
    if (
      confirm(
        `Are you sure you want to delete posting: ${name} - ${job_title}?`
      )
    ) {
      // delete
    }
  }

  function createRow(postingInfo: Posting) {
    const {
      posting_id,
      company_name,
      job_title,
      salary,
      post_start,
      post_end,
    } = postingInfo;
    return (
      <tr key={posting_id}>
        <td>
          <Link
            href={{
              pathname: '/applications/add',
              query: { data: JSON.stringify(postingInfo) },
            }}
          >
            ADD
          </Link>
        </td>
        <td>{company_name}</td>
        <td>{job_title}</td>
        <td>{salary}</td>
        <td>{post_start}</td>
        <td>{post_end}</td>
        <td>
          <Link
            href={{
              pathname: '/postings/update',
              query: { data: JSON.stringify(postingInfo) },
            }}
          >
            EDIT
          </Link>
        </td>
        <td onClick={(_) => deleteRow(posting_id, company_name, job_title)}>
          DELETE
        </td>
      </tr>
    );
  }

  return (
    <>
      <h1>Postings</h1>
      <Link href="/postings/add">Add Posting</Link>
      <form
        onSubmit={(e) => filter(e)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'right',
        }}
      >
        <label htmlFor="filter">
          Filter By Company:
          <select name="filter" required>
            <option value="">-</option>
            {companies.map((company: Company) => (
              <option key={company.company_id} value={company.company_id}>
                {company.name}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" style={{ height: '1rem', width: '3rem' }} />
      </form>
      <table>
        <caption>Current Postings</caption>

        <thead>
          <tr>
            <th>Add Application</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Salary</th>
            <th>Post Start</th>
            <th>Post End</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{postings.map((posting) => createRow(posting))}</tbody>
      </table>
    </>
  );
}
