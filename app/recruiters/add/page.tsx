'use client';
import TimeZoneSelect from '@/components/time-zone-select';
import handleSubmit from '@/helpers/formSubmit';

export default function AddRecruiter() {
  return (
    <>
      <h1>Add a Recruiter</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http://')}>
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
