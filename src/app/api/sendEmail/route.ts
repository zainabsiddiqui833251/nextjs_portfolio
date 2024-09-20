import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Contact Form Submission Confirmation',
      text: `Hello ${name},\n\nThank you for your submission! I will get back to you shortly.\n\nBest regards,\nZainab Siddiqui`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending email:', errorMessage);
    return new Response(JSON.stringify({ message: 'Error sending email', error: errorMessage }), { status: 500 });
  }
}
