'use client';
import handleSubmit from '@/helpers/formSubmit';
export default function AddCandidate() {
  return (
    <>
      <h1>Add a Candidate</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http://')}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Name" required />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" placeholder="Email" required />
        </label>
        <label htmlFor="phone">
          Phone:
          <input type="tel" name="phone" required />
        </label>
        <label htmlFor="recruiter">
          Recruiter:
          <select name="recrtuier" required>
            <option>Kristian Corkitt</option>
            <option>Randal Sibbert</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
