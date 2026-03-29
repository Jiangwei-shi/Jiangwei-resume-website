import {FC, memo, useCallback, useMemo, useState} from 'react';

import {useLocale} from '../../../contexts/LocaleContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

const ContactForm: FC = memo(() => {
  const {messages} = useLocale();
  const formCopy = messages.contact.form;

  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [feedback, setFeedback] = useState<string | null>(null);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
      if (submitStatus === 'success' || submitStatus === 'error') {
        setSubmitStatus('idle');
        setFeedback(null);
      }
    },
    [data, submitStatus],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey?.trim()) {
        setSubmitStatus('error');
        setFeedback(formCopy.configError);
        return;
      }

      const form = event.currentTarget;
      const fd = new FormData(form);
      const name = String(fd.get('name') ?? '').trim();
      const email = String(fd.get('email') ?? '').trim();
      const message = String(fd.get('message') ?? '').trim();

      setSubmitStatus('submitting');
      setFeedback(null);

      try {
        const res = await fetch(WEB3FORMS_URL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            subject: `[Portfolio] Message from ${name || 'visitor'}`,
            email,
            message,
            name,
          }),
        });

        const json = (await res.json()) as {
          body?: {message?: string};
          message?: string;
          success?: boolean;
        };
        const apiMessage = json.body?.message ?? json.message;

        if (!res.ok || json.success === false) {
          setSubmitStatus('error');
          setFeedback(apiMessage ?? formCopy.unknownError);
          return;
        }

        setSubmitStatus('success');
        setFeedback(formCopy.success);
        setData(defaultData);
        form.reset();
      } catch {
        setSubmitStatus('error');
        setFeedback(formCopy.networkError);
      }
    },
    [defaultData, formCopy.configError, formCopy.networkError, formCopy.success, formCopy.unknownError],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  const isSubmitting = submitStatus === 'submitting';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      {feedback ? (
        <p
          className={
            submitStatus === 'success'
              ? 'text-sm text-green-400'
              : submitStatus === 'error'
                ? 'text-sm text-red-400'
                : 'text-sm text-neutral-300'
          }
          role={submitStatus === 'error' ? 'alert' : 'status'}>
          {feedback}
        </p>
      ) : null}
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder={formCopy.namePlaceholder}
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder={formCopy.emailPlaceholder}
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder={formCopy.messagePlaceholder}
        required
        rows={6}
        value={data.message}
      />
      <button
        aria-busy={isSubmitting}
        aria-label={formCopy.submitAria}
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit">
        {isSubmitting ? formCopy.sending : formCopy.send}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
