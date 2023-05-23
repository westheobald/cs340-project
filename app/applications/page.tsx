'use client';
import Link from 'next/link';
import { useEffect, useState, FormEvent, ReactElement } from 'react';

import { Application, Company } from '@/helpers/types';

export default function Applications() {
  const [applications, setApplications]: [Array<Application>, Function] =
    useState([]);
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);

  async function getApplications() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/applications'
    ).then((res) => res.json());
    setApplications(json);
  }
  async function getCompanies() {
    const json = await fetch(
      'https://wesleytheobald.com/api/cs340/companies'
    ).then((res) => res.json());
    setCompanies(json);
  }
  useEffect(() => {
    getApplications();
    getCompanies();
  }, []);

  async function filter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const company_id = data.get('filter');
    if (!company_id) return getApplications();
    const json = await fetch(
      `https://wesleytheobald.com/api/cs340/applications/${company_id}`
    ).then((res) => res.json());
    setApplications(json);
  }

  async function deleteRow(
    id: number,
    name: string,
    company: string,
    job: string
  ) {
    if (
      confirm(
        `Are you sure you want to delete application: ${name} at ${company} - ${job}?`
      )
    ) {
      await fetch(`https://wesleytheobald.com/api/cs340/applications/${id}`, {
        method: 'DELETE',
      });
      getApplications();
    }
  }
  function createRow(applicationInfo: Application): ReactElement {
    const {
      application_id,
      candidate_name,
      company_name,
      job_title,
      date,
      message,
    } = applicationInfo;
    const dateString = new Date(date);

    return (
      <tr key={application_id}>
        <td>{candidate_name}</td>
        <td>{company_name}</td>
        <td>{job_title}</td>
        <td>{dateString.toUTCString()}</td>
        <td>{message}</td>
        <td>
          <Link
            href={{
              pathname: '/applications/update',
              query: { data: JSON.stringify(applicationInfo) },
            }}
          >
            EDIT
          </Link>
        </td>
        <td
          onClick={(_) =>
            deleteRow(application_id, candidate_name, company_name, job_title)
          }
        >
          DELETE
        </td>
      </tr>
    );
  }
  return (
    <>
      <h1>Applications</h1>
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
        <caption>Current Applications</caption>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => createRow(application))}
        </tbody>
      </table>
    </>
  );
}
