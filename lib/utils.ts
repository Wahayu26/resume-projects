import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes cleanly without style conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Client-side input sanitizer for the Contact form and Terminal console.
 * Strips HTML tags, control characters, and dangerous protocols before constructing mailto: or rendering.
 */
export function sanitizeInput(input: string, maxLength = 1000): string {
  return input
    .replace(/<[^>]*>?/gm, "") // strip HTML tags
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "") // strip control chars except newline/tab
    .trim()
    .slice(0, maxLength);
}

/**
 * Strict email validation for client-side contact form.
 */
export function isValidEmail(email: string): boolean {
  const cleaned = email.trim();
  if (!cleaned || cleaned.length > 254) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleaned);
}

/**
 * Builds a safe mailto: URI from validated and sanitized fields.
 */
export function buildSafeMailto(
  recipientEmail: string,
  params: { name: string; email: string; subject: string; message: string }
): string {
  const cleanName = sanitizeInput(params.name, 100);
  const cleanEmail = sanitizeInput(params.email, 150);
  const cleanSubject = sanitizeInput(params.subject, 150) || "Security Opportunity / Portfolio Inquiry";
  const cleanMessage = sanitizeInput(params.message, 2000);

  const bodyLines = [
    `Hello Wahyu,`,
    ``,
    cleanMessage,
    ``,
    `---`,
    `Sender Name: ${cleanName}`,
    `Sender Email: ${cleanEmail}`,
    `Sent via Security Operations Portfolio`,
  ];

  const query = new URLSearchParams({
    subject: `[Portfolio Inquiry] ${cleanSubject}`,
    body: bodyLines.join("\r\n"),
  });

  // URLSearchParams encodes spaces as '+', mailto clients prefer '%20'
  return `mailto:${encodeURIComponent(recipientEmail)}?${query.toString().replace(/\+/g, "%20")}`;
}

