import React from 'react';

export default function EditApplicationStatus() {
  return (
    <>
      <h1>Edit Application Status</h1>
      <form>
        <label htmlFor="message">
          Mesage:
          <input type="text" name="message" placeholder="Message" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
