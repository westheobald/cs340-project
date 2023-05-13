'use client';
import TimeZoneSelect from '@/components/time-zone-select';
import { useSearchParams } from 'next/navigation';

export default function UpdateCompany() {
  const query = useSearchParams();
  const data = query.get('data');
  let company;
  if (data) {
    company = JSON.parse(data);
  }
  return (
    <>
      <h1>Update Company</h1>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Name" defaultValue={company.name} />
        </label>
        <label htmlFor="city">
          City:
          <input type="text" name="city" placeholder="City" defaultValue={company.city}/>
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" name="address" placeholder="Address"defaultValue={company.address} />
        </label>
        <label htmlFor="phone">
          Phone:
          <input type="tel" name="phone" placeholder="Phone" defaultValue={company.phone}/>
        </label>
        <label htmlFor="time_zone">
          Time Zone:
          <TimeZoneSelect defaultOption={company.time_zone}/>
        </label>
        <label htmlFor="industry">
          Industry:
          <input type="text" name="industry" placeholder="Industry" defaultValue={company.industry} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
