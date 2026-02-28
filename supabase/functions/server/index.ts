// @ts-nocheck - Disable TypeScript checks for Deno environment compatibility
import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/server/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/server/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message, newsletter } = body;

    // Validate required fields
    if (!email || !message) {
      return c.json({ error: "Email and message are required" }, 400);
    }

    // Get SendGrid API key from environment
    const sendgridApiKey = Deno.env.get("SENDGRID_API_KEY");
    if (!sendgridApiKey) {
      console.error("SENDGRID_API_KEY environment variable is not set");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Send email using SendGrid API
    const emailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${sendgridApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "contact@smartdialog-ai.com" }],
            subject: `New Contact Form Submission from ${name || email}`,
          },
        ],
        from: {
          email: "noreply@smartdialog-ai.com",
          name: "Smart Dialog Contact Form",
        },
        reply_to: {
          email: email,
          name: name || "",
        },
        content: [
          {
            type: "text/html",
            value: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name || "Not provided"}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Newsletter Signup:</strong> ${newsletter ? "Yes" : "No"}</p>
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
          },
        ],
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("SendGrid API error:", errorText);
      return c.json({ error: "Failed to send email", details: errorText }, 500);
    }

    console.log("Email sent successfully via SendGrid");

    return c.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

Deno.serve(app.fetch);