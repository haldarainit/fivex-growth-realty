import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const experience = formData.get('experience') as string;
    const currentCompany = formData.get('currentCompany') as string;
    const currentCtc = formData.get('currentCtc') as string;
    const expectedCtc = formData.get('expectedCtc') as string;
    const noticePeriod = formData.get('noticePeriod') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const resumeFile = formData.get('resume') as File | null;

    // Validation
    if (!fullName || !email || !phone || !experience || !expectedCtc || !noticePeriod) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Prepare resume attachment
    let attachments: { filename: string; content: Buffer; contentType: string }[] = [];
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments = [{
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
      }];
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head><style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #052E1F; color: white; padding: 20px 30px; }
          .header h1 { margin: 0; font-size: 20px; }
          .header p { margin: 5px 0 0; color: #C5A059; font-size: 14px; }
          .body { padding: 30px; }
          .section { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 20px; }
          .label { font-weight: bold; color: #052E1F; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
          .value { color: #555; margin-top: 2px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
          .badge { display: inline-block; background: #C5A059; color: #052E1F; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; }
          .cover { background: #f8f9fa; border-left: 3px solid #C5A059; padding: 15px; border-radius: 4px; font-style: italic; }
        </style></head>
        <body>
          <div class="header">
            <h1>New Job Application Received</h1>
            <p>Position: ${jobTitle}</p>
          </div>
          <div class="body">
            <div class="section">
              <h2 style="color:#052E1F;margin-bottom:15px;">Applicant Details</h2>
              <div class="grid">
                <div><div class="label">Full Name</div><div class="value">${fullName}</div></div>
                <div><div class="label">Email</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
                <div><div class="label">Phone</div><div class="value"><a href="tel:${phone}">${phone}</a></div></div>
                <div><div class="label">Experience</div><div class="value">${experience}</div></div>
                <div><div class="label">Current Company</div><div class="value">${currentCompany || 'N/A'}</div></div>
                <div><div class="label">Current CTC</div><div class="value">${currentCtc || 'N/A'}</div></div>
                <div><div class="label">Expected CTC</div><div class="value"><span class="badge">${expectedCtc}</span></div></div>
                <div><div class="label">Notice Period</div><div class="value">${noticePeriod}</div></div>
              </div>
            </div>
            ${coverLetter ? `
              <div class="section">
                <div class="label">Cover Letter</div>
                <div class="cover" style="margin-top:10px;">${coverLetter}</div>
              </div>
            ` : ''}
            <p style="color:#888;font-size:12px;">Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"FIVEX Careers" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Application] ${jobTitle} — ${fullName}`,
      html: emailHtml,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application email error:', error);
    return NextResponse.json({ error: 'Failed to send application' }, { status: 500 });
  }
}
