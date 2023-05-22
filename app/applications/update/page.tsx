'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';
import { FormEvent, useState, useEffect } from 'react';
import { ApplicationStatus } from '@/helpers/types';
export default function UpdateApplication() {
  const [statuses, setStatuses]: [Array<ApplicationStatus>, Function] = useState([]);

  async function getData() {
    const res = await fetch(
      'https://wesleytheobald.com/api/cs340/application-statuses'
    );
    const json = await res.json();
    setStatuses(json);
  }
  useEffect(() => {
    getData();
  });
  const router = useRouter();
  const query = useSearchParams();
  const data = query.get('data');
  let application;
  if (data) {
    application = JSON.parse(data);
  }
  application.date = new Date(application.date).toISOString();
  async function update(e: FormEvent<HTMLFormElement>) {
    const res = await handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/applications',
      'PUT'
    );
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
          Date/Time:
          <input
            type="datetime-local"
            name="date"
            defaultValue={application.date.slice(0, 16)}
            required
          />
        </label>
        <label htmlFor="status_id">
          Status:
          <select name="status_id">
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
