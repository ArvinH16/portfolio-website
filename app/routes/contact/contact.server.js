import { json } from '@remix-run/node';
import { Resend } from 'resend';

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function action({ request }) {
  const formData = await request.formData();
  const isBot = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const errors = {};

  // Return without sending if a bot trips the honeypot
  if (isBot) return json({ success: true });

  // Handle input validation on the server
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please enter a message.';
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  const failure = () =>
    json(
      {
        errors: {
          message:
            'Your message could not be sent. Please email arvin@hakakian.me directly.',
        },
      },
      { status: 503 }
    );

  if (!process.env.RESEND_API_KEY || !process.env.EMAIL) return failure();

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Portfolio <${process.env.FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: [process.env.EMAIL],
      replyTo: email,
      subject: `Portfolio message from ${email}`,
      text: `From: ${email}\n\n${message}`,
    });
    if (error) return failure();
    return json({ success: true });
  } catch {
    return failure();
  }
}
