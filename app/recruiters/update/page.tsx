'use client';
import TimeZoneSelect from '@/components/time-zone-select';
import { useSearchParams } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';

export default function UpdateRecruiter() {
  const query = useSearchParams();
  const data = query.get('data');
  let company;
  if (data) {
    company = JSON.parse(data);
  }
  return (
    <>
      <h1>Update Recruiter</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http://')}>
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
        <label htmlFor="time_zone">
          Time Zone:
          <TimeZoneSelect defaultValue={company.time_zone} />
        </label>
        <label htmlFor="commission">
          Commission:
          <input
            type="text"
            name="commission"
            placeholder="Commission"
            defaultValue={company.commission}
            required
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
