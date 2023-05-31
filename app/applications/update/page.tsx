'use client';
import { FormEvent, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { Application, ApplicationStatus } from '@/helpers/types';

export default function UpdateApplication() {
  const router = useRouter();
  const [status, setStatus]: [number, Function] = useState(0);
  const [statuses, setStatuses]: [Array<ApplicationStatus>, Function] =
    useState([]);
  async function getStatuses() {
    const res = await fetch(
      'https://wesleytheobald.com/api/cs340/application-statuses'
    );
    const json = await res.json();
    setStatuses(json);
    console.log(application);
    if (application) {
      setStatus(application.status_id);
    }
  }
  useEffect(() => {
    getStatuses();
  }, []);

  const query = useSearchParams();
  const data = query.get('data');
  let application: undefined | Application;
  if (data) application = JSON.parse(data);
  if (!application) return;

  const date = new Date(application.date);
  const localeDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const localeTime = `${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes()
  ).padStart(2, '0')}`;
  application.date = localeDate + 'T' + localeTime;

  async function update(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    values.date = new Date(String(values.date)).toISOString();
    const dateFormat = values.date.slice(0, 10);
    const timeFormat = values.date.slice(11, 16);
    values.date = `${dateFormat} ${timeFormat}`;

    await fetch('https://wesleytheobald.com/api/cs340/applications', {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    });
    router.push('/applications');
  }

  return (
    <>
      <h1>Update Application</h1>

      <form onSubmit={update}>
        <label htmlFor="application_id">
          <input
            type="number"
            name="application_id"
            defaultValue={application.application_id}
            readOnly
            required
            hidden
          />
        </label>
        <label htmlFor="candidate_id">
          {application.candidate_name}
          <input
            type="number"
            name="candidate_id"
            defaultValue={application.candidate_id}
            readOnly
            required
            hidden
          />
        </label>
        <label htmlFor="posting_id">
          {application.company_name} - {application.job_title}
          <input
            type="number"
            name="posting_id"
            defaultValue={application.posting_id}
            readOnly
            required
            hidden
          />
        </label>
        <label htmlFor="date">
          Date/Time (local):
          <input
            type="datetime-local"
            name="date"
            defaultValue={application.date.slice(0, 16)}
            required
          />
        </label>
        <label htmlFor="status_id">
          Status:
          <select
            name="status_id"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statuses.map((status) => (
              <option key={status.status_id} value={status.status_id}>
                {status.message}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
