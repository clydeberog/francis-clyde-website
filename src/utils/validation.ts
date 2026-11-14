import { ContactFormErrors, ContactFormValues } from '../types/portfolio';

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isValidOptionalUrl(rawUrl: string): boolean {
  const trimmed = rawUrl.trim();
  if (!trimmed) return true;
  const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(normalized);
    return parsed.hostname.indexOf('.') > 0 && !/\s/.test(trimmed);
  } catch {
    return false;
  }
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.service.trim()) {
    errors.service = 'Please select a service from the list.';
  }

  if (values.service === 'Custom' && values.customService.trim().length < 3) {
    errors.customService = 'Please specify your custom service request.';
  }

  if (!isValidOptionalUrl(values.website)) {
    errors.website = 'Please enter a valid website URL (e.g., https://yourcompany.com) or leave blank.';
  }

  if (values.details.trim().length < 10) {
    errors.details = 'Please share a brief note on your website or goals (at least 10 characters).';
  }

  return errors;
}
