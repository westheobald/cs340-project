export default function UpdateApplication() {
  return (
    <>
      <h1>Update Application</h1>
      
      <form>
        <p>Candidate: Joe Candidate</p>
        <p>Company: Reilly and Sons</p>
        <p>Job: Systems Management Engineer</p>
        <label htmlFor="submitted">Submitted:
          <select name="submitted">
            <option>True</option>
            <option>False</option>
          </select>
        </label>
        <label htmlFor="status">Status:
          <select name="status">
            <option>Submitted</option>
            <option>Review/Pending</option>
            <option>Completed</option>
            <option>Offer Extended</option>
            <option>Not Interested</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
