# SBTS Security - Enterprise Cybersecurity Website

A sophisticated, professional cybersecurity services website built with Next.js 15, featuring human-centric design, interactive chatbot, and comprehensive client intake forms.

## 🌟 Features

### **Professional Design**
- **Human-Centric Imagery**: Professional team photos and industry-specific imagery throughout
- **Modern UI/UX**: Clean, professional design similar to Accenture/IBM/LevelBlue
- **Responsive Design**: Fully responsive across all devices
- **Professional Color Scheme**: Blues, purples, and professional gradients

### **Interactive Components**
- **AI Chatbot**: Intelligent chatbot with quick prompts and responses
- **Multi-step Client Intake Form**: Comprehensive lead capture form
- **Contact Forms**: Professional contact forms with validation
- **Resource Downloads**: Cybersecurity guides and templates

### **Complete Service Portfolio**
- **Managed SOC & MDR/XDR**: 24/7 security operations
- **DevSecOps & AppSec**: Application security and CI/CD integration
- **Compliance & GRC**: ISO 27001, SOC 2, HIPAA, PCI DSS, GDPR
- **Security Staffing**: Co-managed SOC and flexible staffing
- **Cyber Insurance Advisory**: Policy guidance and readiness assessments
- **White-Label SOC**: Partner program for MSPs/MSSPs

### **Technical Stack**
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Professional UI components
- **Docker**: Containerized deployment
- **Nginx**: Reverse proxy for production

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sbts-security
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   ```
   http://localhost:3001 (Next.js app)
   http://localhost:8080 (Nginx proxy)
   ```

## 📁 Project Structure

```
sbts-security/
├── src/
│   ├── app/
│   │   ├── api/                 # API routes
│   │   │   ├── contact/         # Contact form handler
│   │   │   ├── intake/          # Client intake handler
│   │   │   └── health/          # Health check
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── Chatbot.tsx          # AI chatbot component
│   │   ├── ClientIntakeForm.tsx # Multi-step intake form
│   │   ├── ContactForm.tsx      # Contact form component
│   │   └── Navigation.tsx       # Navigation component
│   └── lib/                     # Utility functions
├── public/                      # Static assets
├── docker-compose.yml           # Docker configuration
├── Dockerfile                   # Docker build file
├── nginx.conf                   # Nginx configuration
└── package.json                 # Dependencies
```

## 🎨 Design Features

### **Human-Centric Imagery**
- Professional team photos in hero section
- Industry-specific imagery for each service
- Team member profiles with expertise
- Professional headshots throughout

### **Professional Branding**
- SBTS Group integration
- U.S.-headquartered positioning
- Global delivery footprint
- 25+ years of experience emphasis

### **Interactive Elements**
- Hover effects and animations
- Professional color transitions
- Responsive image galleries
- Modern card layouts

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=SBTS Security
NEXT_PUBLIC_CONTACT_EMAIL=elewis@sbtsgroup.com
NEXT_PUBLIC_CONTACT_PHONE=+1-571-276-2203
```

### API Integration
The website includes API routes for:
- Contact form submissions (`/api/contact`)
- Client intake form (`/api/intake`)
- Health checks (`/api/health`)

### CRM Integration
To integrate with your CRM (HubSpot, Salesforce, etc.):
1. Update the API routes in `src/app/api/`
2. Add your CRM API credentials
3. Implement lead creation and email notifications

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**
- **Tablet optimization**
- **Desktop enhancement**
- **Touch-friendly interactions**

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Docker Production
```bash
docker-compose -f docker-compose.yml --profile production up -d
```

### Environment-Specific Configs
- **Development**: `npm run dev`
- **Production**: `npm run build && npm start`
- **Docker**: `docker-compose up -d`

## 🔒 Security Features

- **Input validation** on all forms
- **CSRF protection** (Next.js built-in)
- **XSS prevention** (React built-in)
- **Secure headers** (Next.js config)
- **Environment variable protection**

## 📊 Analytics & SEO

### SEO Optimization
- Meta tags for all pages
- Open Graph tags
- Twitter Card support
- Structured data markup
- Sitemap generation

### Performance
- **Image optimization** with Next.js
- **Code splitting** and lazy loading
- **CDN-ready** static assets
- **Caching strategies**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to SBTS Group LLC.

## 📞 Support

For technical support or questions:
- **Email**: elewis@sbtsgroup.com
- **Phone**: +1-571-276-2203
- **Website**: sbtssecurity.com

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Professional website with human imagery
- ✅ Interactive chatbot
- ✅ Client intake forms
- ✅ Contact forms
- ✅ Responsive design

### Phase 2 (Planned)
- [ ] Blog/Content management system
- [ ] Case studies and testimonials
- [ ] Advanced chatbot with AI integration
- [ ] Multi-language support
- [ ] Advanced analytics dashboard

### Phase 3 (Future)
- [ ] Customer portal
- [ ] Service management interface
- [ ] Partner portal for white-label services
- [ ] Advanced reporting tools
- [ ] Mobile app integration

---

**Built with ❤️ by SBTS Security Team**
