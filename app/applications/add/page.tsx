import React from 'react';

export default function UpdateApplication() {
  return (
    <>
      <h1>Add Application</h1>

      <form>
        <p>Company: Reilly and Sons</p>
        <p>Job: Mechanical Systems Engineer</p>
        <label htmlFor="candidate">
          Candidate:
          <select name="candidate">
            <option>Joe Candidate</option>
          </select>
        </label>
        <label htmlFor="submitted">
          Submitted:
          <select name="submitted">
            <option>True</option>
            <option>False</option>
          </select>
        </label>
        <label htmlFor="status">
          Status:
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
