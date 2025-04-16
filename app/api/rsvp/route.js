import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Rsvp from '@/model/Rsvp';
import { Resend } from 'resend';
import RsvpNotification from '@/email/RsvpNotification';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { attending, name, email, guests } = await req.json();

  try {
    await dbConnect();

    // Save RSVP to DB
    const rsvp = new Rsvp({ attending, name, email, guests });
    await rsvp.save();

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: 'Wedding RSVP Form <onboarding@resend.dev>',
      to: 'tafonsoftwarespecialist@gmail.com',
      subject: 'New Wedding RSVP',
      react: RsvpNotification({ name, email, attending, guests }), // JSX directly
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ success: true, emailSent: false });
    }

    return NextResponse.json({ success: true, emailSent: true });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
