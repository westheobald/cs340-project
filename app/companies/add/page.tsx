import TimeZoneSelect from '@/components/time-zone-select';

export default function AddCompany() {
  return (
    <>
      <h1>Add a Company</h1>
      <div className="form__container">
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" placeholder="Name" />
          </label>
          <label htmlFor="city">
            City:
            <input type="text" name="city" placeholder="City" />
          </label>
          <label htmlFor="address">
            Address:
            <input type="text" name="address" placeholder="Address" />
          </label>
          <label htmlFor="phone">
            Phone:
            <input type="tel" name="phone" placeholder="Phone" />
          </label>
          <label htmlFor="time_zone">
            Time Zone:
            <TimeZoneSelect defaultValue='-08:00' />
          </label>
          <label htmlFor="industry">
            Industry:
            <input type="text" name="industry" placeholder="Industry" />
          </label>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
