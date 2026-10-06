import { NextResponse } from "next/server";

import { validateInquiry } from "@/lib/validation";

/**
 * POST /api/contact — validates an enquiry and forwards it to an optional
 * webhook (CRM, Slack, Zapier…) configured via CONTACT_WEBHOOK_URL.
 */
export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Invalid JSON body." } },
      { status: 400 }
    );
  }

  const result = validateInquiry(payload);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 422 }
    );
  }

  const inquiry = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    source: "iemc-company-profile",
    ...result.data,
  };

  console.info("[contact] new inquiry received", inquiry);

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });
    } catch (error) {
      console.error("[contact] webhook delivery failed", error);
    }
  }

  return NextResponse.json({ ok: true, id: inquiry.id });
}
