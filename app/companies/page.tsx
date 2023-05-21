'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Company } from '@/helpers/types';

export default function Companies() {
  const [companies, setCompanies]: [Array<Company>, Function] = useState([]);
  async function getData() {
    const res = await fetch('https://wesleytheobald.com/api/cs340/companies');
    const json = await res.json();
    setCompanies(json);
  }
  useEffect(() => {
    getData();
  }, []);

  function deleteRow(id: number, name: string): void {
    async function deleteId(id: number) {
      const res = await fetch(
        `https://wesleytheobald.com/api/cs340/companies/${id}`,
        { method: 'DELETE' }
      );
      getData();
    }
    if (confirm(`Are you sure you want to delete company: ${name}?`)) {
      deleteId(id);
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
