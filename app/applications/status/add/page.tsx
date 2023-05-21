'use client';
import handleSubmit from '@/helpers/formSubmit';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
export default function AddApplicationStatus() {
  const router = useRouter();

  async function add(e: FormEvent<HTMLFormElement>) {
    handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/application-statuses',
      'POST'
    );
    router.push('/applications/status');
  }
  return (
    <>
      <h1>Add Application Status</h1>
      <form onSubmit={add}>
        <label htmlFor="message">
          Message:
          <input type="text" name="message" placeholder="Message" required />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
