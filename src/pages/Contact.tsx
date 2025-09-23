import React, { useRef, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';
const API_URL = import.meta.env.VITE_CONTACT_API_URL as string;

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [msg, setMsg] = useState('');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Gather form fields
    const form = new FormData(formRef.current);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    const website = String(form.get('website') || ''); // honeypot

    // Basic front-end validation
    if (!name || !email || !message) {
      setStatus('error');
      setMsg('Please fill out name, email, and message.');
      return;
    }

    setStatus('loading');
    setMsg('Sending…');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // `website` is the honeypot: backend treats non-empty as spam and returns ok.
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || (data && data.error)) {
        throw new Error(data?.error || `HTTP ${res.status}`);
      }

      setStatus('success');
      setMsg('Message sent successfully!');
      formRef.current.reset();
      // Clear message after a bit
      setTimeout(() => setMsg(''), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMsg('Something went wrong. Please try again.');
    } finally {
      // Return to idle so button re-enables if needed
      setStatus((s) => (s === 'loading' ? 'idle' : s));
    }
  };
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-3xl border border-white/15 rounded-xl backdrop-blur-sm p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Contact</h2>
        <p className="text-gray-300 mb-6">
          Have a question or want to work together? Drop a message below.
        </p>

        {/* Status banner */}
        {msg && (
          <div
            className={`mb-4 rounded-md px-4 py-3 text-sm ${status === 'error'
                ? 'bg-red-500/15 text-red-300 border border-red-500/30'
                : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
              }`}
            aria-live="polite"
            role="status"
          >
            {msg}
          </div>
        )}

        <form
          ref={formRef}
          name="submit-to-google-sheet"
          onSubmit={onSubmit}
          className="grid grid-cols-1 gap-4"
        >
          {/* Honeypot (hidden to users) */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm text-gray-300 mb-1">Your name</span>
              <input
                name="name"
                type="text"
                required
                placeholder="Monkey D. Luffy"
                className="bg-black/30 border border-white/15 rounded-md px-3 py-2 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/30"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-gray-300 mb-1">Email</span>
              <input
                name="email"
                type="email"
                inputMode="email"
                required
                placeholder="luffy@Strawhat.com"
                className="bg-black/30 border border-white/15 rounded-md px-3 py-2 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/30"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm text-gray-300 mb-1">Message</span>
            <textarea
              name="message"
              required
              placeholder="Write your message here…"
              rows={6}
              className="bg-black/30 border border-white/15 rounded-md px-3 py-2 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-white/30"
            />
          </label>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-2 text-white hover:bg-white/10 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {status === 'loading' ? 'Sending…' : 'Send message'}
            </button>

            <span className="text-xs text-gray-400">
              Powered by AWS
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
