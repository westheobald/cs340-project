import Link from 'next/link';

export default function Candidates() {
  return (
    <>
      <h1>Candidates</h1>
      <Link href="/candidates/add">
        Add Candidate
      </Link>
      <table>
        <caption>Current Candidates</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jae Shevlane</td>
            <td>jaeshevlane@gmail.com</td>
            <td>857-229-2289</td>
            <td>
              <Link href="/candidates/update">
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
