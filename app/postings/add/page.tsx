export default function AddPosting() {
  return (
    <>
      <h1>Add a Posting</h1>
      <form>
        <label htmlFor="company">
          Company:
          <select name="company">
            <option>Reily and Sons</option>
          </select>
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
