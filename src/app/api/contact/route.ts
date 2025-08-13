import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, service } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Store in CRM (HubSpot, Salesforce, etc.)
    // 3. Create ticket in support system
    
    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      service,
      timestamp: new Date().toISOString()
    });

    // For now, we'll just return success
    // In production, integrate with your email service and CRM
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
