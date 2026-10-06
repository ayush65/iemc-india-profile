import type { InquiryErrors, InquiryInput } from "@/lib/types";

const PHONE_PATTERN = /^\+?[\d\s-]{10,16}$/;

export type ValidationResult =
  | { ok: true; data: InquiryInput }
  | { ok: false; errors: InquiryErrors };

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Shared validation used by both the client form (instant feedback) and the
 * `/api/contact` route handler (authoritative check).
 */
export function validateInquiry(payload: unknown): ValidationResult {
  const body = (payload ?? {}) as Record<string, unknown>;

  const data: InquiryInput = {
    name: asString(body.name),
    phone: asString(body.phone),
    message: asString(body.message),
  };

  const errors: InquiryErrors = {};

  if (data.name.length < 2) {
    errors.name = "Please enter your full name";
  }

  if (!PHONE_PATTERN.test(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (data.message.length < 10) {
    errors.message = "Please provide any details about your requirement";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}
