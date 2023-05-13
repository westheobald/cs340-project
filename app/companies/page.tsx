'use client';
import Link from 'next/link';

export default function Companies() {
  type Company = {
    company_id: number;
    name: string;
    city: string;
    address: string;
    phone: string;
    time_zone: string;
    industry: string;
  };
  const sampleCompanies: Array<Company> = [
    {
      company_id: 1,
      name: 'Reilly and Sons',
      city: 'Luwu',
      address: '77175 Hintze Pass',
      phone: '442-906-8682',
      time_zone: '-11:00',
      industry: 'Law',
    },
    {
      company_id: 2,
      name: 'Lowe, Larson and Brown',
      city: 'Fengshan',
      address: '3551 Everett Terrace',
      phone: '669-886-1182',
      time_zone: '-06:00',
      industry: 'Construction',
    },
    {
      company_id: 3,
      name: 'Green-Ziemann',
      city: 'Jingtan',
      address: '2 Basil Parkway',
      phone: '952-439-1592',
      time_zone: '+01:00',
      industry: 'Building Products',
    },
  ];

  function deleteRow(id: number, name: string): void {
    if (confirm(`Are you sure you want to delete company: ${name}?`)) {
      // delete
    }
  }

  function createRow(companyInfo: Company) {
    const { company_id, name, city, address, phone, time_zone, industry } =
      companyInfo;
    return (
      <tr>
        <td>{name}</td>
        <td>{city}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{time_zone}</td>
        <td>{industry}</td>
        <td>
          <Link
            href={{
              pathname: '/companies/update',
              query: { data: JSON.stringify(companyInfo) },
            }}
          >
            EDIT
          </Link>
        </td>
        <td onClick={(_) => deleteRow(company_id, name)}>DELETE</td>
      </tr>
    );
  }

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
        <tbody>{sampleCompanies.map((company) => createRow(company))}</tbody>
      </table>
    </>
  );
}
