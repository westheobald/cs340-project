import { FormEvent } from 'react';

export default async function handleSubmit(
  event: FormEvent<HTMLFormElement>,
  url: string,
  method: string
): Promise<void | Object> {
  event.preventDefault();
  if (event.currentTarget instanceof Element) {
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    return await fetch(url, {
      method: method,
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());
  }
}
