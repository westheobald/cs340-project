import Link from 'next/link';

export default function Postings() {
  return (
    <>
      <h1>Postings</h1>
      <Link href="/postings/add">
        Add Posting
      </Link>
      <table>
        <caption>Current Postings</caption>
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Salary</th>
            <th>Post Start</th>
            <th>Post End</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reilly and Sons</td>
            <td>Mechanical Systems Engineer</td>
            <td>237881</td>
            <td>2023-06-06</td>
            <td>2023-09-24</td>
            <td>
              <Link href="/postings/update">
                EDIT
              </Link>
            </td>
            <td>DELETE</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
