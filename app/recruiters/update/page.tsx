'use client';
import TimeZoneSelect from '@/components/time-zone-select';
import { useSearchParams } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';

export default function UpdateRecruiter() {
  const query = useSearchParams();
  const data = query.get('data');
  let recruiter;
  if (data) {
    recruiter = JSON.parse(data);
  }
  return (
    <>
      <h1>Update Recruiter</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http://')}>
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
