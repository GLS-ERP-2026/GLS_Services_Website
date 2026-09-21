/**
 * Shown after a form is submitted. It never claims the request was received —
 * the site has no backend, so it reports exactly what happened: the visitor's
 * own mail client was handed a pre-filled message, and the composed text is
 * printed so it can be copied if that did not work.
 */
export function FormOutcome({
  composed,
  wasTruncated,
  email,
  phone,
  phoneHref,
  attachmentNote,
}: {
  composed: string | null;
  wasTruncated: boolean;
  email: string;
  phone: string;
  phoneHref: string;
  attachmentNote?: string;
}) {
  if (!composed) return null;

  return (
    <div className="form-status is-visible" role="status">
      <p>
        <strong>Your email client should now be open with this request filled in.</strong> Nothing has been sent by
        this website &mdash; send that email to complete the request.
      </p>
      {attachmentNote && <p>{attachmentNote}</p>}
      {wasTruncated && (
        <p>
          The message was shortened to fit your mail client&rsquo;s limit. Paste the full text below into the email
          before sending.
        </p>
      )}
      <p>
        If nothing opened, email <a href={`mailto:${email}`}>{email}</a> or call{' '}
        <a href={phoneHref}>{phone}</a> and copy the details below.
      </p>
      <label className="form-copy-label" htmlFor="composed-request">
        Your request
      </label>
      <textarea id="composed-request" className="form-copy" readOnly rows={10} value={composed} />
    </div>
  );
}
