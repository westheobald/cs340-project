'use client';
import TimeZoneSelect from '@/components/time-zone-select';
import { useSearchParams, useRouter } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';
import { FormEvent } from 'react';

export default function UpdateRecruiter() {
  const router = useRouter();
  const query = useSearchParams();
  const data = query.get('data');
  let recruiter;
  if (data) {
    recruiter = JSON.parse(data);
  }
  async function update(e: FormEvent<HTMLFormElement>) {
    const res = await handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/recruiters',
      'PUT'
    );
    router.push('/companies');
  }
  return (
    <>
      <h1>Update Recruiter</h1>
      <form onSubmit={update}>
        <label htmlFor="recruiter_id">
          <input
            type="number"
            name="recruiter_id"
            defaultValue={recruiter.recruiter_id}
            readOnly
            required
            hidden
          />
        </label>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={recruiter.name}
            required
          />
        </label>
        <label htmlFor="time_zone">
          Time Zone:
          <TimeZoneSelect defaultValue={recruiter.time_zone} />
        </label>
        <label htmlFor="commission">
          Commission:
          <input
            type="number"
            name="commission"
            placeholder="Commission"
            defaultValue={recruiter.commission}
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
