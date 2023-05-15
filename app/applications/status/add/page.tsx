'use client';
import handleSubmit from '@/helpers/formSubmit';
import React from 'react';
export default function AddApplicationStatus() {
  return (
    <>
      <h1>Add Application Status</h1>
      <form onSubmit={(e) => handleSubmit(e, 'http')}>
        <label htmlFor="message">
          Message:
          <input type="text" name="message" placeholder="Message" required />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
