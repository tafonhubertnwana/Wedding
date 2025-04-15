import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Rsvp from '@/models/Rsvp';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { attending, name, email, guests } = await req.json();

  try {
    await dbConnect();

    // Save to DB
    const rsvp = new Rsvp({ attending, name, email, guests });
    await rsvp.save();

    // Send email
    await resend.emails.send({
      from: 'Wedding RSVP <noreply@yourdomain.com>',
      to: 'youremail@yourdomain.com',
      subject: 'New RSVP Submission',
      html: `<p><strong>${name}</strong> (${email}) has responded: <strong>${attending}</strong>.</p><p>Guest(s): ${guests.join(', ')}</p>`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
