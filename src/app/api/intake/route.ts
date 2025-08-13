import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      // Company Information
      companyName,
      industry,
      companySize,
      website,
      
      // Contact Information
      firstName,
      lastName,
      email,
      phone,
      jobTitle,
      
      // Security Needs
      primaryConcerns,
      currentSecurityTools,
      complianceRequirements,
      budget,
      timeline,
      
      // Additional Information
      description,
      preferredContact
    } = body;

    // Validate required fields
    if (!companyName || !firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Store in CRM (HubSpot, Salesforce, etc.)
    // 2. Send email notifications to sales team
    // 3. Create lead in marketing automation
    // 4. Schedule follow-up tasks
    
    console.log('Client intake submission:', {
      company: {
        name: companyName,
        industry,
        size: companySize,
        website
      },
      contact: {
        firstName,
        lastName,
        email,
        phone,
        jobTitle
      },
      security: {
        concerns: primaryConcerns,
        tools: currentSecurityTools,
        compliance: complianceRequirements,
        budget,
        timeline
      },
      additional: {
        description,
        preferredContact
      },
      timestamp: new Date().toISOString()
    });

    // For now, we'll just return success
    // In production, integrate with your CRM and email systems
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your submission! Our team will review your requirements and contact you within 24 hours to schedule a consultation.',
        leadId: `LEAD-${Date.now()}` // Generate a lead ID
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Client intake error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
