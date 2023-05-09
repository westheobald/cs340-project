export default function AddCandidate() {
  return (
    <>
      <h1>Add a Candidate</h1>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label htmlFor="phone">
          Phone:
          <input type="tel" name="phone" />
        </label>
        <label htmlFor="recruiter">
          Recruiter:
          <select name="recrtuier">
            <option>Kristian Corkitt</option>
            <option>Randal Sibbert</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
