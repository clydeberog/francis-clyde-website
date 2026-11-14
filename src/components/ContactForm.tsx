import { FormEvent, useId, useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, SERVICE_OPTIONS } from '../data/portfolioData';
import { ContactFormErrors, ContactFormValues } from '../types/portfolio';
import { validateContactForm } from '../utils/validation';

interface ContactFormProps {
  variant?: 'page' | 'footer';
}

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  service: '',
  customService: '',
  website: '',
  details: '',
};

export function ContactForm({ variant = 'page' }: ContactFormProps) {
  const formId = useId();
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);

  const updateField = (field: keyof ContactFormValues, nextValue: string) => {
    const updated: ContactFormValues = {
      ...values,
      [field]: nextValue,
      ...(field === 'service' && nextValue !== 'Custom' ? { customService: '' } : {}),
    };
    setValues(updated);

    if (errors[field]) {
      const nextErrors = validateContactForm(updated);
      setErrors((prev) => ({
        ...prev,
        [field]: nextErrors[field],
        ...(field === 'service' && nextValue !== 'Custom' ? { customService: undefined } : {}),
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedData({ ...values });
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmittedData(null);
  };

  const inputBaseClass =
    'w-full rounded-lg border bg-white px-3.5 py-2.5 text-[15px] text-[#0b1f3a] transition-colors focus:border-[#0b1f3a] focus:outline-none focus:ring-2 focus:ring-[#0b1f3a]/10';

  if (submittedData) {
    const resolvedService =
      submittedData.service === 'Custom'
        ? `Custom: ${submittedData.customService.trim()}`
        : submittedData.service;

    return (
      <div className="grid gap-4" aria-live="polite">
        <div className="flex items-center gap-2.5 text-emerald-700">
          <CheckCircle2 size={22} aria-hidden="true" />
          <span className="text-sm font-semibold">Inquiry Received</span>
        </div>
        <h3 className="text-xl font-bold text-[#0b1f3a]">
          Thank you, {submittedData.name.trim()}. Your request is ready.
        </h3>
        <p className="text-[15px] leading-relaxed text-slate-600">
          Your inquiry details are validated. I review every request personally and you can also
          reach me directly at{' '}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="font-semibold text-[#0b1f3a] underline underline-offset-2"
          >
            {CONTACT_INFO.email}
          </a>{' '}
          or on WhatsApp at{' '}
          <a
            href={CONTACT_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 underline underline-offset-2"
          >
            {CONTACT_INFO.whatsappDisplay}
          </a>
          .
        </p>

        <div className="grid gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <div>
            <strong className="text-[#0b1f3a]">Name:</strong> {submittedData.name.trim()}
          </div>
          <div>
            <strong className="text-[#0b1f3a]">Email:</strong> {submittedData.email.trim()}
          </div>
          <div>
            <strong className="text-[#0b1f3a]">Service Selected:</strong> {resolvedService}
          </div>
          <div>
            <strong className="text-[#0b1f3a]">Company Website:</strong>{' '}
            {submittedData.website.trim() || 'Not provided'}
          </div>
          <div>
            <strong className="text-[#0b1f3a]">Website &amp; Goals:</strong>{' '}
            {submittedData.details.trim()}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#0b1f3a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#132d52]"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor={`${formId}-name`} className="text-sm font-semibold text-[#0b1f3a]">
            Name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={`${inputBaseClass} ${
              errors.name ? 'border-red-600 bg-red-50' : 'border-slate-300'
            }`}
            required
          />
          {errors.name && (
            <div className="flex items-center gap-1.5 text-[13px] font-medium text-red-600" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        <div className="grid gap-1.5">
          <label htmlFor={`${formId}-email`} className="text-sm font-semibold text-[#0b1f3a]">
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={`${inputBaseClass} ${
              errors.email ? 'border-red-600 bg-red-50' : 'border-slate-300'
            }`}
            required
          />
          {errors.email && (
            <div className="flex items-center gap-1.5 text-[13px] font-medium text-red-600" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>
      </div>

      <div className={variant === 'footer' ? 'grid grid-cols-1 gap-4 sm:grid-cols-2' : 'grid gap-4'}>
        <div className="grid gap-1.5">
          <label htmlFor={`${formId}-service`} className="text-sm font-semibold text-[#0b1f3a]">
            Service Needed
          </label>
          <select
            id={`${formId}-service`}
            name="service"
            value={values.service}
            onChange={(e) => updateField('service', e.target.value)}
            className={`${inputBaseClass} cursor-pointer ${
              errors.service ? 'border-red-600 bg-red-50' : 'border-slate-300'
            }`}
            required
          >
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === 'Custom' ? 'Custom (Specify your request)' : option}
              </option>
            ))}
          </select>
          {errors.service && (
            <div className="flex items-center gap-1.5 text-[13px] font-medium text-red-600" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              <span>{errors.service}</span>
            </div>
          )}
        </div>

        <div className="grid gap-1.5">
          <label htmlFor={`${formId}-website`} className="text-sm font-semibold text-[#0b1f3a]">
            Company Website URL <span className="font-normal text-slate-500">(Optional)</span>
          </label>
          <input
            id={`${formId}-website`}
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://yourcompany.com"
            value={values.website}
            onChange={(e) => updateField('website', e.target.value)}
            className={`${inputBaseClass} ${
              errors.website ? 'border-red-600 bg-red-50' : 'border-slate-300'
            }`}
          />
          {errors.website && (
            <div className="flex items-center gap-1.5 text-[13px] font-medium text-red-600" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              <span>{errors.website}</span>
            </div>
          )}
        </div>
      </div>

      {values.service === 'Custom' && (
        <div className="grid gap-1.5">
          <label
            htmlFor={`${formId}-custom-service`}
            className="text-sm font-semibold text-[#0b1f3a]"
          >
            Custom Service Request
          </label>
          <input
            id={`${formId}-custom-service`}
            name="customService"
            type="text"
            placeholder="Briefly name or describe the custom service you need"
            value={values.customService}
            onChange={(e) => updateField('customService', e.target.value)}
            className={`${inputBaseClass} ${
              errors.customService ? 'border-red-600 bg-red-50' : 'border-slate-300'
            }`}
          />
          {errors.customService && (
            <div className="flex items-center gap-1.5 text-[13px] font-medium text-red-600" role="alert">
              <AlertCircle size={14} aria-hidden="true" />
              <span>{errors.customService}</span>
            </div>
          )}
        </div>
      )}

      <div className="grid gap-1.5">
        <label htmlFor={`${formId}-details`} className="text-sm font-semibold text-[#0b1f3a]">
          Your Website &amp; Growth Goals
        </label>
        <textarea
          id={`${formId}-details`}
          name="details"
          placeholder="Share your target locations or audience, and what rankings or website improvements you want to achieve..."
          value={values.details}
          onChange={(e) => updateField('details', e.target.value)}
          className={`${inputBaseClass} resize-y ${
            variant === 'footer' ? 'min-h-[96px]' : 'min-h-[128px]'
          } ${errors.details ? 'border-red-600 bg-red-50' : 'border-slate-300'}`}
          required
        />
        {errors.details && (
          <div className="flex items-center gap-1.5 text-[13px] font-medium text-red-600" role="alert">
            <AlertCircle size={14} aria-hidden="true" />
            <span>{errors.details}</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:bg-emerald-700"
      >
        {variant === 'footer' ? 'Send Inquiry' : 'Request Consultation'}
      </button>
    </form>
  );
}
