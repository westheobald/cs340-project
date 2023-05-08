import TimeZoneSelect from '@/components/time-zone-select';

export default function UpdatePosting() {
  return (
    <>
      <h1>Update Posting</h1>
      <form>
        <label htmlFor="company">
          Posting:
          <input type="text" name="company" placeholder="Posting" required />
        </label>
        <label htmlFor="job_title">
          Job Title:
          <input
            type="text"
            name="job_title"
            placeholder="Job Title"
            required
          />
        </label>
        <label htmlFor="salary">
          Salary:
          <input type="number" min="0" name="salary" required />
        </label>
        <label htmlFor="post_start">
          Post Start:
          <input type="date" name="post_start" required />
        </label>
        <label htmlFor="post_end">
          Post End:
          <input type="date" name="post_end" required />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
