'use client';
import { Application, Company } from '@/helpers/types';
import Link from 'next/link';
import { useEffect, useState, FormEvent } from 'react';

export default function Applications() {
  const [applications, setApplications]: [Array<Application>, Function] =
    useState([]);
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  async function getApplications() {
    const res = await fetch(
      'https://wesleytheobald.com/api/cs340/applications'
    );
    const json = await res.json();
    setApplications(json);
    return json;
  }
  async function getCompanies() {
    const res = await fetch('https://wesleytheobald.com/api/cs340/companies');
    const json = await res.json();
    setCompanies(json);
  }
  useEffect(() => {
    getApplications();
    getCompanies();
  }, []);
  async function filter(event: FormEvent<HTMLFormElement>): Promise<object> {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const company_id = data.get('filter');
    if (!company_id) {
      return getApplications();
    }
    const res = await fetch(
      `https://wesleytheobald.com/api/cs340/applications/${company_id}`
    );
    const json = await res.json();
    setApplications(json);
    return json;
  }
  function deleteRow(
    id: number,
    name: string,
    company: string,
    job: string
  ): void {
    async function deleteId(id: number) {
      const res = await fetch(
        `https://wesleytheobald.com/api/cs340/applications/${id}`,
        { method: 'DELETE' }
      );
      getApplications();
      return await res.json();
    }
    if (
      confirm(
        `Are you sure you want to delete application: ${name} at ${company} - ${job}?`
      )
    ) {
      deleteId(id);
    }
  }
  function createRow(applicationInfo: Application) {
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
      <Link href="applications/status">Application Statuses</Link>
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
