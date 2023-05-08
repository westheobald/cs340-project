import TimeZoneSelect from '@/components/time-zone-select';

export default function AddRecruiter() {
  return (
    <>
      <h1>Add a Recruiter</h1>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label htmlFor="time_zone">
          Time Zone:
          <TimeZoneSelect />
        </label>
        <label htmlFor="commission">
          Commission:
          <input type="number" min="0" name="commission" placeholder="Commission" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
