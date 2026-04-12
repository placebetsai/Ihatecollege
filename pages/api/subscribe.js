import { NextResponse } from "next/server";

export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  let body = {};
  try { body = await req.json(); } catch {}
  const { email } = body;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const timestamp = new Date().toISOString();
  console.log(`[SUBSCRIBE] New email signup: ${email} at ${timestamp}`);

  const errors = [];

  // 1. Store in Supabase (primary — persistent storage)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/subscribers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email,
          source: "ihatecollege.com",
          created_at: timestamp,
        }),
      });
      if (!res.ok) {
        const txt = await res.text();
        // 409 or 23505 = duplicate email, that's fine
        if (!txt.includes("23505") && res.status !== 409) {
          errors.push(`Supabase: ${res.status} ${txt}`);
        }
      }
    } catch (err) {
      errors.push(`Supabase: ${err.message}`);
    }
  }

  // 2. Buttondown free newsletter API (secondary — for sending emails later)
  const buttondownKey = process.env.BUTTONDOWN_API_KEY;
  if (buttondownKey) {
    try {
      await fetch("https://api.buttondown.com/v1/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${buttondownKey}`,
        },
        body: JSON.stringify({
          email_address: email,
          type: "regular",
          tags: ["ihatecollege"],
        }),
      });
    } catch (err) {
      errors.push(`Buttondown: ${err.message}`);
    }
  }

  // 3. Generic webhook fallback (if configured)
  if (process.env.EMAIL_WEBHOOK_URL) {
    try {
      await fetch(process.env.EMAIL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "ihatecollege.com", timestamp }),
      });
    } catch (err) {
      errors.push(`Webhook: ${err.message}`);
    }
  }

  if (errors.length > 0) {
    console.error("[SUBSCRIBE] Partial failures:", errors.join("; "));
  }

  // Always return success to the user — we don't want to block signup
  // if one backend is down. Supabase is the source of truth.
  return NextResponse.json({ success: true });
}
