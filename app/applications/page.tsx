'use client';
import { sampleApplication } from '@/helpers/sampleData';
import { Application } from '@/helpers/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Applications() {
  const [applications, setApplications]: [Array<Application>, Function] =
    useState([]);
  async function getData() {
    const res = await fetch(
      'https://wesleytheobald.com/api/cs340/applications'
    );
    const json = await res.json();
    setApplications(json);
  }
  useEffect(() => {
    getData();
  }, []);

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
      getData();
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
    return (
      <tr key={application_id}>
        <td>{candidate_name}</td>
        <td>{company_name}</td>
        <td>{job_title}</td>
        <td>{date}</td>
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
