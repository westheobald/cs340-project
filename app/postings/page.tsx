'use client';
import { Company, Posting } from '@/helpers/types';
import Link from 'next/link';
import { useState, useEffect, FormEvent } from 'react';

export default function Postings() {
  const [postings, setPostings]: [Array<Posting>, Function] = useState([]);
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  async function getPostings() {
    const res = await fetch('https://wesleytheobald.com/api/cs340/postings');
    const json = await res.json();
    setPostings(json);
    return json;
  }
  async function getCompanies() {
    const res = await fetch('https://wesleytheobald.com/api/cs340/companies');
    const json = await res.json();
    setCompanies(json);
  }

  useEffect(() => {
    getPostings();
    getCompanies();
  }, []);

  async function filter(event: FormEvent<HTMLFormElement>): Promise<object> {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const company_id = data.get('filter');
    if (!company_id) {
      return getPostings();
    }
    const res = await fetch(`https://wesleytheobald.com/api/cs340/postings/${company_id}`);
    const json = await res.json();
    setPostings(json);
    return json;
  }

  function deleteRow(id: number, name: string, job_title: string): void {
    async function deleteId(id: number) {
      const res = await fetch(
        `https://wesleytheobald.com/api/cs340/postings/${id}`,
        { method: 'DELETE' }
      );
      getPostings();
    }
    if (
      confirm(
        `Are you sure you want to delete posting: ${name} - ${job_title}?`
      )
    ) {
      deleteId(id);
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
    const startDate = new Date(post_start);
    const endDate = new Date(post_end);
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
        <td>{`${startDate.getUTCFullYear()}-${startDate.getUTCMonth() + 1}-${startDate.getUTCDate()}`}</td>
        <td>{`${endDate.getUTCFullYear()}-${endDate.getUTCMonth() + 1}-${endDate.getUTCDate()}`}</td>
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
          <select name="filter">
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
            <th>Salary (in thousands)</th>
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
