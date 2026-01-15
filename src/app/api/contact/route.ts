import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Log the structured data as requested
        console.log('--- CONTACT FORM SUBMISSION ---');
        console.log(JSON.stringify(body, null, 2));
        console.log('-------------------------------');

        // In a real app, we would send an email here using Resend, SendGrid, etc.

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
