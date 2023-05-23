'use client';
import { FormEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import handleSubmit from '@/helpers/formSubmit'; // submit form (event, url, method)
import TimeZoneSelect from '@/components/time-zone-select'; // select input with options of all time zones

export default function UpdateCompany() {
  const router = useRouter();
  const query = useSearchParams();
  let data = query.get('data');
  let company;
  if (data) company = JSON.parse(data);

  async function update(e: FormEvent<HTMLFormElement>) {
    await handleSubmit(
      e,
      'https://wesleytheobald.com/api/cs340/companies',
      'PUT'
    );
    router.push('/companies');
  }

  return (
    <>
      <h1>Update Company</h1>
      <form onSubmit={update}>
        <label htmlFor="company_id">
          <input
            type="number"
            name="company_id"
            defaultValue={company.company_id}
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
            defaultValue={company.name}
            required
          />
        </label>
        <label htmlFor="city">
          City:
          <input
            type="text"
            name="city"
            placeholder="City"
            defaultValue={company.city}
            required
          />
        </label>
        <label htmlFor="address">
          Address:
          <input
            type="text"
            name="address"
            placeholder="Address"
            defaultValue={company.address}
            required
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            defaultValue={company.phone}
            required
          />
        </label>
        <label htmlFor="time_zone">
          Time Zone:
          <TimeZoneSelect defaultValue={company.time_zone} />
        </label>
        <label htmlFor="industry">
          Industry:
          <input
            type="text"
            name="industry"
            placeholder="Industry"
            defaultValue={company.industry}
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
