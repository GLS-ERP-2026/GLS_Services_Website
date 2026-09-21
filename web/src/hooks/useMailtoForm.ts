import { useState, type FormEvent } from 'react';

/**
 * Submits a form by composing a pre-filled email rather than posting anywhere.
 *
 * There is no backend and no email service connected to this site, so nothing
 * is transmitted by the page itself and no submission is ever reported as
 * successful. Instead the visitor's own mail client is opened with every field
 * filled in, and the composed text is handed back so they can copy it if the
 * mail client does not open.
 *
 * When a real backend is wired up, replace the body of `handleSubmit` with the
 * network call — the field-collection logic below can be reused as-is.
 */

/** mailto: URLs get truncated by some mail clients and by the Windows shell. */
const MAX_MAILTO_LENGTH = 1800;

export interface MailtoFormConfig {
  to: string;
  subjectPrefix: string;
  /** Field name → the label used in the composed email. Order is preserved. */
  labels: Record<string, string>;
  /** Field whose value is appended to the subject line. */
  subjectField?: string;
}

export interface MailtoFormState {
  /** Composed plain-text email body, or null before the first submit. */
  composed: string | null;
  /** True when the mailto: URL had to be shortened to stay within client limits. */
  wasTruncated: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  reset: () => void;
}

function composeBody(form: HTMLFormElement, labels: Record<string, string>): string {
  const data = new FormData(form);
  const lines: string[] = [];
  for (const [name, label] of Object.entries(labels)) {
    const raw = data.get(name);
    const value = typeof raw === 'string' ? raw.trim() : '';
    if (value) lines.push(`${label}: ${value}`);
  }
  return lines.join('\n');
}

export function useMailtoForm(config: MailtoFormConfig): MailtoFormState {
  const [composed, setComposed] = useState<string | null>(null);
  const [wasTruncated, setWasTruncated] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const body = composeBody(form, config.labels);
    const subjectExtra = config.subjectField
      ? String(new FormData(form).get(config.subjectField) ?? '').trim()
      : '';
    const subject = subjectExtra ? `${config.subjectPrefix} — ${subjectExtra}` : config.subjectPrefix;

    const href = `mailto:${config.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const truncated = href.length > MAX_MAILTO_LENGTH;
    const safeBody = truncated ? `${body.slice(0, 900)}\n\n[...]` : body;
    const safeHref = truncated
      ? `mailto:${config.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(safeBody)}`
      : href;

    setComposed(`To: ${config.to}\nSubject: ${subject}\n\n${body}`);
    setWasTruncated(truncated);
    window.location.href = safeHref;
  }

  function reset() {
    setComposed(null);
    setWasTruncated(false);
  }

  return { composed, wasTruncated, handleSubmit, reset };
}
