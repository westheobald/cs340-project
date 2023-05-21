'use client';
import TimeZoneSelect from '@/components/time-zone-select';
import handleSubmit from '@/helpers/formSubmit';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function AddCompany() {
  const router = useRouter();

  async function add(e: FormEvent<HTMLFormElement>) {
    handleSubmit(e, 'https://wesleytheobald.com/api/cs340/companies', 'POST');
    router.push('/companies')
  }
  return (
    <>
      <h1>Add a Company</h1>
      <form onSubmit={add}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Name" required />
        </label>
        <label htmlFor="city">
          City:
          <input type="text" name="city" placeholder="City" required />
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" name="address" placeholder="Address" required />
        </label>
        <label htmlFor="phone">
          Phone:
          <input type="tel" name="phone" placeholder="Phone" required />
        </label>
        <label htmlFor="time_zone">
          Time Zone:
          <TimeZoneSelect defaultValue="-08:00" />
        </label>
        <label htmlFor="industry">
          Industry:
          <input type="text" name="industry" placeholder="Industry" required />
        </label>
        <input id="submit" type="submit" />
      </form>
    </>
  );
}
