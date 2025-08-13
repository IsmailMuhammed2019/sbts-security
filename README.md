# SBTS Security Website

A sophisticated cybersecurity services website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Design**: Professional cybersecurity website with Accenture/IBM-style aesthetics
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: 
  - Multi-step client intake form
  - Floating chatbot with quick prompts
  - Smooth scrolling navigation
- **Human-Centric Imagery**: Professional team photos and industry-specific visuals
- **Comprehensive Services**: Managed SOC, DevSecOps, Compliance, Staffing, Cyber Insurance, White-Label SOC
- **Docker Support**: Containerized deployment with nginx reverse proxy

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Docker & Docker Compose

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Access the website at http://localhost:3001
# Access nginx proxy at http://localhost:8080 (production profile)
```

### Production with Nginx

```bash
# Run with nginx reverse proxy
docker-compose --profile production up --build

# Access via nginx at http://localhost:8080
```

## Project Structure

```
sbts-security/
├── src/
│   ├── app/
│   │   ├── api/health/          # Health check endpoint
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   └── components/
│       ├── ui/                  # shadcn/ui components
│       ├── Chatbot.tsx          # Floating chatbot
│       ├── ClientIntakeForm.tsx # Multi-step form
│       └── Navigation.tsx       # Navigation component
├── Dockerfile                   # Multi-stage Docker build
├── docker-compose.yml          # Container orchestration
├── nginx.conf                  # Nginx configuration
└── next.config.ts              # Next.js configuration
```

## Services Offered

1. **Managed SOC & MDR/XDR**
   - 24/7/365 monitoring and response
   - Endpoint, network, identity, and cloud telemetry
   - Playbook-driven containment

2. **DevSecOps & Application Security**
   - Secure SDLC integration
   - SAST/DAST/IAST scanning
   - Container and Kubernetes security

3. **Compliance & GRC**
   - ISO 27001, SOC 2, HIPAA, PCI DSS
   - GDPR, CMMC, NIST frameworks
   - Continuous controls monitoring

4. **Security Staffing**
   - Tier 1-3 analyst staffing
   - Co-managed SOC operations
   - Flexible engagement models

5. **Cyber Insurance Advisory**
   - Pre-policy readiness assessments
   - Control gap analysis
   - Premium optimization

6. **White-Label SOC**
   - Branded dashboards and reporting
   - Multi-tenant isolation
   - Partner success support

## Industries Served

- Financial Services & Banking
- Healthcare & Life Sciences
- Manufacturing & Industrial
- Technology & SaaS
- Government & Public Sector
- Energy & Utilities
- Retail & E-commerce
- Education

## Contact Information

- **Phone**: +1-571-276-2203
- **Email**: elewis@sbtsgroup.com
- **Address**: SBTS Group LLC, 329 K St SE, Washington, DC 20003

## Docker Ports

- **Website**: http://localhost:3001
- **Nginx Proxy**: http://localhost:8080 (production profile)
- **Health Check**: http://localhost:3001/api/health

## Environment Variables

- `NODE_ENV`: Production/development environment
- `NEXT_TELEMETRY_DISABLED`: Disable Next.js telemetry
- `PORT`: Application port (default: 3000)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## Deployment Notes

- The application uses Next.js standalone output for optimized Docker builds
- Nginx reverse proxy provides additional security headers and compression
- Health checks ensure container reliability
- Multi-stage Docker build minimizes image size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© SBTS Group LLC. All rights reserved.
