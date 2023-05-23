'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { FormEvent } from 'react';

import handleSubmit from '@/helpers/formSubmit';

export default function EditApplicationStatus() {
  const router = useRouter();

  const query = useSearchParams();
  const data = query.get('data');
  let status;
  if (data) status = JSON.parse(data);

  async function update(e: FormEvent<HTMLFormElement>) {
    await handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/application-statuses',
      'PUT'
    );
    router.push('/applications/status');
  }
  return (
    <>
      <h1>Edit Application Status</h1>
      <form onSubmit={update}>
        <label htmlFor="status_id">
          <input
            type="number"
            name="status_id"
            defaultValue={status.status_id}
            readOnly
            required
            hidden
          />
        </label>
        <label htmlFor="message">
          Mesage:
          <input
            type="text"
            name="message"
            placeholder="Message"
            defaultValue={status.message}
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
