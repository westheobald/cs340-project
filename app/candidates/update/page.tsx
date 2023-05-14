'use client';
import { useSearchParams } from 'next/navigation';
import handleSubmit from '@/helpers/formSubmit';

export default function UpdateCandidate() {
  const query = useSearchParams();
  const data = query.get('data');
  let candidate;
  if (data) {
    candidate = JSON.parse(data);
  }

  return (
    <>
      <h1>Update Candidate</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http:')}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={candidate.name}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={candidate.email}
            required
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            type="tel"
            name="phone"
            defaultValue={candidate.phone}
            required
          />
        </label>
        <label htmlFor="recruiter">
          Recruiter:
          <select name="recrtuier" defaultValue={candidate.recruiter} required>
            <option>Kristian Corkitt</option>
            <option>Randal Sibbert</option>
            <option>Jeanine Kyles</option>
            <option>Dela Austick</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
