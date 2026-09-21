import { useState, type FormEvent } from 'react';

const STUB_MESSAGE =
  "Thanks — this form isn't connected to email delivery yet. Please reach us directly at contact@glsserv.com or +971 52 608 5036 in the meantime.";

/** Ports the site's front-end-only form behavior: validates, then shows a stub message instead of submitting. */
export function useFormStub() {
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setMessage(STUB_MESSAGE);
    form.reset();
  }

  return { message, handleSubmit };
}
