import React from 'react';
import TimeZoneSelect from '@/components/time-zone-select';

export default function AddCompany() {
  return (
    <>
      <h1>Add a Company</h1>
      <form>
        <label htmlfor="name">
          Name:
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label htmlfor="city">
          City:
          <input type="text" name="city" placeholder="City" />
        </label>
        <label htmlfor="address">
          Address:
          <input type="text" name="address" placeholder="Address" />
        </label>
        <label htmlfor="phone">
          Phone:
          <input type="tel" name="phone" placeholder="Phone" />
        </label>
        <label htmlfor="time_zone">
          Time Zone:
          <TimeZoneSelect />
        </label>
        <label htmlfor="industry">
          Industry:
          <input type="text" name="industry" placeholder="Industry" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
