export default function UpdateCandidate() {
  return (
    <>
      <h1>Update Candidate</h1>
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
        <input type="submit" />
      </form>
    </>
  );
}
