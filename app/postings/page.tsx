'use client';
import { useState, useEffect, FormEvent, ReactElement } from 'react';
import Link from 'next/link';

import { Company, Posting } from '@/helpers/types';

export default function Postings() {
  const [postings, setPostings]: [Array<Posting>, Function] = useState([]);
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  async function getPostings() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/postings'
    ).then((res) => res.json());
    setPostings(json);
  }
  async function getCompanies() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/companies'
    ).then((res) => res.json());
    setCompanies(json);
  }

  useEffect(() => {
    getPostings();
    getCompanies();
  }, []);

  async function filter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const company_id = data.get('filter');
    if (!company_id) {
      // if no id filter no postings
      getPostings();
    } else {
      const json = await fetch(
        `https://wesleytheobald.com/api/cs340/postings/${company_id}`
      ).then((res) => res.json());
      setPostings(json);
    }
  }

  async function deleteRow(id: number, name: string, job_title: string) {
    if (
      confirm(
        `Are you sure you want to delete posting: ${name} - ${job_title}?`
      )
    ) {
      await fetch(`https://wesleytheobald.com/api/cs340/postings/${id}`, {
        method: 'DELETE',
      });
      getPostings();
    }
  }

  function createRow(postingInfo: Posting): ReactElement {
    const {
      posting_id,
      company_name,
      job_title,
      salary,
      post_start,
      post_end,
    } = postingInfo;

    const startDate = new Date(post_start);
    const startFormated = `${startDate.getUTCFullYear()}-${startDate.getUTCMonth() + 1
      }-${startDate.getUTCDate()}`;

    const endDate = new Date(post_end);
    const endFormated = `${endDate.getUTCFullYear()}-${endDate.getUTCMonth() + 1
      }-${endDate.getUTCDate()}`;

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
        <td>{startFormated}</td>
        <td>{endFormated}</td>
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
        onSubmit={filter}
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
