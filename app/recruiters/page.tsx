import Link from 'next/link';

export default function Recruiters() {
  return (
    <>
      <h1>Recruiters</h1>
      <Link href="/recruiters/add">Add Recruiter</Link>
      <table>
        <caption>Current Recruiters</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Zone</th>
            <th>Commission</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kristian Corkitt</td>
            <td>+0:00</td>
            <td>15</td>
            <td><Link href="/recruiters/update">EDIT</Link></td>
            <td>DELETE</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
