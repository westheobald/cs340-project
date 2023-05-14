'use client';
import { useSearchParams } from 'next/navigation';

export default function EditApplicationStatus() {
  const query = useSearchParams();
  const data = query.get('data');
  let company;
  if (data) {
    company = JSON.parse(data);
  }
  return (
    <>
      <h1>Edit Application Status</h1>
      <form>
        <label htmlFor="message">
          Mesage:
          <input type="text" name="message" placeholder="Message" defaultValue={company.message} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
