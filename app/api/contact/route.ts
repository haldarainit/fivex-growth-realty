import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, inquiryType } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head><style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #052E1F; color: white; padding: 20px 30px; }
          .header h1 { margin: 0; font-size: 20px; }
          .header p { margin: 5px 0 0; color: #C5A059; font-size: 14px; }
          .body { padding: 30px; }
          .label { font-weight: bold; color: #052E1F; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
          .value { color: #555; margin-top: 2px; margin-bottom: 15px; }
          .message-box { background: #f8f9fa; border-left: 3px solid #C5A059; padding: 15px; border-radius: 4px; }
          .badge { display: inline-block; background: #C5A059; color: #052E1F; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; }
        </style></head>
        <body>
          <div class="header">
            <h1>New Contact Inquiry</h1>
            <p>FIVEX Growth Realty Website</p>
          </div>
          <div class="body">
            <div class="label">Inquiry Type</div>
            <div class="value"><span class="badge">${inquiryType || 'General'}</span></div>
            
            <div class="label">Full Name</div>
            <div class="value">${name}</div>
            
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
            
            ${phone ? `<div class="label">Phone</div><div class="value"><a href="tel:${phone}">${phone}</a></div>` : ''}
            
            ${subject ? `<div class="label">Subject</div><div class="value">${subject}</div>` : ''}
            
            <div class="label">Message</div>
            <div class="message-box">${message}</div>
            
            <p style="color:#888;font-size:12px;margin-top:20px;">Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"FIVEX Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Contact] ${subject || 'New Inquiry'} — ${name}`,
      html: emailHtml,
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: `"FIVEX Growth Realty" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'We received your inquiry — FIVEX Growth Realty',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #052E1F; padding: 20px 30px; color: white;">
            <h1 style="margin: 0; font-size: 20px;">FIVEX Growth Realty</h1>
          </div>
          <div style="padding: 30px;">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to FIVEX Growth Realty. We have received your inquiry and our team will get back to you within <strong>24 hours</strong>.</p>
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Call us directly: <strong>+91 98765 43210</strong></li>
              <li>WhatsApp: <strong>+91 98765 43210</strong></li>
            </ul>
            <p>Warm regards,<br/><strong>FIVEX Growth Realty Team</strong></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
