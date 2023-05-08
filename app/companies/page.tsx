import Link from 'next/link';

export default function Companies() {
  return (
    <>
      <h1>Companies</h1>
      <Link href="/companies/add">Add Company</Link>
      <table>
        <caption>Current Companies</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Time Zone</th>
            <th>Industry</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reilly and Sons</td>
            <td>Luwu</td>
            <td>77175 Hintze Pass</td>
            <td>442-906-8682</td>
            <td>+0:00</td>
            <td>Law</td>
            <td><Link href="/companies/update">EDIT</Link></td>
            <td>DELETE</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
