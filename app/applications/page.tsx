import Link from 'next/link';

export default function Applications() {
  return (
    <>
      <h1>Applications</h1>
      <table>
        <caption>Current Applications</caption>
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Date</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Joe Candidate</td>
            <td>Reilly and Sons</td>
            <td>Mechanical Systems Engineer</td>
            <td>2023-06-06</td>
            <td>True</td>
            <td>Submitted</td>
            <td>
              <Link href="/applications/update">EDIT</Link>
            </td>
            <td>DELETE</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
