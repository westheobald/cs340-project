import { FormEvent } from 'react';

export default function handleSubmit(
  event: FormEvent<HTMLFormElement>,
  url: string
) {
  event.preventDefault();
  if (event.currentTarget instanceof Element) {
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    console.log(values);
    // send values to database
  }
}
