'use client';
import handleSubmit from '@/helpers/formSubmit';
import { useSearchParams } from 'next/navigation';

export default function EditApplicationStatus() {
  const query = useSearchParams();
  const data = query.get('data');
  let status;
  if (data) {
    status = JSON.parse(data);
  }
  return (
    <>
      <h1>Edit Application Status</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http;')}>
        <label htmlFor="status_id">
          ID:
          <input
            type="number"
            name="status_id"
            defaultValue={status.status_id}
            readOnly
            required
          />{' '}
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
