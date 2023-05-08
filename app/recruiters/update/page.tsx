import TimeZoneSelect from '@/components/time-zone-select';

export default function UpdateRecruiter() {
  return (
    <>
      <h1>Update Recruiter</h1>
      <form>
        <label htmlfor="name">
          Name:
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label htmlfor="time_zone">
          Time Zone:
          <TimeZoneSelect />
        </label>
        <label htmlfor="commission">
          Commission:
          <input type="text" name="commission" placeholder="Commission" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
