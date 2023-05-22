'use client';
import TimeZoneSelect from '@/components/time-zone-select';
import handleSubmit from '@/helpers/formSubmit';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function AddRecruiter() {
  const router = useRouter();

  async function add(e: FormEvent<HTMLFormElement>) {
    await handleSubmit(e, 'https://wesleytheobald.com/api/cs340/recruiters', 'POST');
    router.push('/recruiters');
  }
  return (
    <>
      <h1>Add a Recruiter</h1>
      <form onSubmit={add}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Name" required />
        </label>
        <label htmlFor="time_zone">
          Time Zone:
          <TimeZoneSelect defaultValue="-08:00" />
        </label>
        <label htmlFor="commission">
          Commission:
          <input
            type="number"
            min="0"
            name="commission"
            placeholder="Commission"
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
