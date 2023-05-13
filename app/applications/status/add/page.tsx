import React from 'react';
export default function AddApplicationStatus() {
  return (
    <>
      <h1>Add Application Status</h1>
      <form>
        <label htmlFor="message">
          Message:
          <input type="text" name="message" placeholder="Message" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
