import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, scope } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("DISCORD_WEBHOOK_URL is not set");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    // both mail and discord notif
    const [discordRes, emailRes] = await Promise.allSettled([
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "new message from smone",
              color: 0xb72b2b,
              fields: [
                { name: "Name", value: String(name), inline: true },
                { name: "Email", value: String(email), inline: true },
                { name: "Scope of Work", value: String(scope || "Not specified"), inline: false },
                { name: "Message", value: String(message).slice(0, 1000), inline: false },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      }),
      resend.emails.send({
        from: process.env.CONTACT_EMAIL_FROM!,
        to: process.env.CONTACT_EMAIL_TO!,
        replyTo: String(email),
        subject: `new message from ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <h2 style="color:#b72b2b;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Scope of Work:</strong> ${scope || "Not specified"}</p>
            <p><strong>Message:</strong></p>
            <p>${String(message).replace(/\n/g, "<br/>")}</p>
          </div>
        `,
      }),
    ]);

    const discordOk = discordRes.status === "fulfilled" && discordRes.value.ok;
    const emailOk = emailRes.status === "fulfilled";
    if (!discordOk && !emailOk) {
      console.error("Both notification channels failed", { discordRes, emailRes });
      return NextResponse.json({ error: "Failed to deliver message" }, { status: 502 });
    }

    if (!discordOk) console.error("Discord webhook failed:", discordRes);
    if (!emailOk) console.error("Email send failed:", emailRes);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}