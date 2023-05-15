'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Company } from '@/helpers/types';

import { sampleCompanies } from '@/helpers/sampleData';

export default function Companies() {
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);

  useEffect(() => {
    setCompanies(sampleCompanies) // SET TO RETURN OF DATABASE FETCH
  }, []);

  function deleteRow(id: number, name: string): void {
    if (confirm(`Are you sure you want to delete company: ${name}?`)) {
      // DELETE
    }
  }
 
  function createRow(companyInfo: Company) {
    const { company_id, name, city, address, phone, time_zone, industry } =
      companyInfo;
    return (
      <tr key={company_id}>
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
        <tbody>{companies.map((company) => createRow(company))}</tbody>
      </table>
    </>
  );
}
