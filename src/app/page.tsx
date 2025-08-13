import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Globe, Zap, Eye, Code, FileText, Handshake, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <Chatbot />
      
      {/* Hero Section with Professional Team Imagery */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Professional cybersecurity team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/80 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-900">
                25+ Years in Business
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Enterprise-grade cybersecurity.
                <span className="text-blue-400"> U.S. leadership.</span>
                <br />
                <span className="text-blue-300">Global delivery.</span>
              </h1>
              <p className="text-xl mb-8 text-slate-300 leading-relaxed">
                SBTS Security is a full-spectrum MSSP delivering 24/7 managed detection and response, 
                DevSecOps, compliance, staffing, training, and cyber-insurance advisory—powered by 
                our state-of-the-art 350-seat SOC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Free Security Assessment
                </Button>
                <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900">
                  Book SOC Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Professional Team Image */}
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="SBTS Security team" 
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Our Global SOC Team</p>
                  <p className="text-xs opacity-90">350+ certified analysts worldwide</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <p className="text-sm">24/7/365 Monitoring</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Globe className="w-8 h-8 mx-auto mb-2 text-green-400" />
                    <p className="text-sm">Global Footprint</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <p className="text-sm">350+ SOC Analysts</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <p className="text-sm">Real-time Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">350+</div>
              <div className="text-slate-600">SOC Analysts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-slate-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Human Imagery */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Security Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From managed SOC operations to DevSecOps, compliance, staffing, and cyber insurance—we&apos;re your one-stop security partner.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" 
                  alt="SOC analyst monitoring" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle>Managed SOC & MDR/XDR</CardTitle>
                <CardDescription>
                  24/7/365 monitoring, triage, and response with endpoint, network, identity, and cloud telemetry correlation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Playbook-driven containment</li>
                  <li>• Executive reporting & MTTR tracking</li>
                  <li>• SIEM + SOAR + EDR/XDR integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Developer coding securely" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle>DevSecOps & AppSec</CardTitle>
                <CardDescription>
                  Build security into your SDLC with secure design reviews, developer enablement, and CI/CD pipeline hardening.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Secure coding standards & SAST/DAST</li>
                  <li>• Container & Kubernetes security</li>
                  <li>• CI/CD pipeline hardening</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2111&q=80" 
                  alt="Compliance consultant" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle>Compliance & GRC</CardTitle>
                <CardDescription>
                  ISO 27001, SOC 2, HIPAA, PCI DSS, GDPR, CMMC, NIST frameworks with continuous controls monitoring.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Risk assessments & policy design</li>
                  <li>• Continuous controls monitoring</li>
                  <li>• Audit support & board reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Security team collaboration" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle>Security Staffing</CardTitle>
                <CardDescription>
                  Rapid staffing of Tier 1-3 analysts, engineers, and GRC specialists with flexible engagement models.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Co-managed SOC operations</li>
                  <li>• Resident engineers & virtual benches</li>
                  <li>• Flexible surge capacity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1554224154-26032cdc0c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Cyber insurance advisor" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle>Cyber Insurance Advisory</CardTitle>
                <CardDescription>
                  Readiness assessments, policy guidance, and control uplift to improve insurability and premiums.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Underwriter control assessments</li>
                  <li>• Policy coverage optimization</li>
                  <li>• Incident response alignment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="White-label partnership" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle>White-Label SOC</CardTitle>
                <CardDescription>
                  Enterprise-grade SOC services for MSPs and MSSPs with branded dashboards and multi-tenant isolation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Branded dashboards & reporting</li>
                  <li>• Multi-tenant isolation</li>
                  <li>• API integrations & sales enablement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section with Professional Photos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Global Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our diverse team of cybersecurity experts spans multiple continents, delivering 24/7 protection with local expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="SOC Director" 
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-slate-600 mb-2">SOC Director</p>
              <p className="text-sm text-slate-500">15+ years in cybersecurity operations</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Chief Security Officer" 
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-slate-600 mb-2">Chief Security Officer</p>
              <p className="text-sm text-slate-500">Former Fortune 500 CISO</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Threat Intelligence Lead" 
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full border-4 border-white"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">David Rodriguez</h3>
              <p className="text-slate-600 mb-2">Threat Intelligence Lead</p>
              <p className="text-sm text-slate-500">Former government cyber analyst</p>
            </div>
          </div>
          
          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">350+</div>
              <div className="text-slate-600">Security Analysts</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-slate-600">Countries</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Languages</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600">Global Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section with Human Faces */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the unique security challenges and compliance requirements of your industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-green-500 to-green-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2111&q=80" 
                  alt="Financial services" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Financial Services</h3>
                <p className="text-sm text-slate-600">PCI DSS, SOX, fraud detection, and regulatory compliance</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Healthcare" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
                <p className="text-sm text-slate-600">HIPAA, HITECH, medical device security, PHI protection</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-orange-500 to-orange-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Manufacturing" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
                <p className="text-sm text-slate-600">OT/ICS security, supply chain protection, IP safeguarding</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-purple-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Technology" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Technology</h3>
                <p className="text-sm text-slate-600">DevSecOps, cloud security, SaaS protection, API security</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Resources & Insights</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay informed with the latest cybersecurity trends, best practices, and industry insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Ransomware Readiness Checklist
                </CardTitle>
                <CardDescription>
                  Essential steps to protect your organization from ransomware attacks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-blue-50">
                  Download Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Zero Trust Quick-Start Guide
                </CardTitle>
                <CardDescription>
                  Implement zero trust architecture in your organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-green-50">
                  Download Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Board Cyber Risk Reporting Template
                </CardTitle>
                <CardDescription>
                  Executive-level cybersecurity reporting framework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-purple-50">
                  Download Template
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of organizations that trust SBTS Security to protect their digital assets and ensure business continuity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-blue-100">+1-571-276-2203</p>
              <p className="text-blue-100">elewis@sbtsgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Headquarters</h3>
              <p className="text-blue-100">SBTS Group LLC</p>
              <p className="text-blue-100">329 K St SE, Washington, DC 20003</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <p className="text-blue-100">LinkedIn • Twitter • YouTube</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of organizations that trust SBTS Security with their cybersecurity needs. 
            Get started with a free security assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SBTS Security</h3>
              <p className="text-slate-400 mb-4">
                U.S.-headquartered cybersecurity with global delivery. 
                25+ years protecting businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Managed SOC & MDR</li>
                <li>DevSecOps & AppSec</li>
                <li>Compliance & GRC</li>
                <li>Security Staffing</li>
                <li>Cyber Insurance</li>
                <li>White-Label SOC</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Financial Services</li>
                <li>Healthcare</li>
                <li>Manufacturing</li>
                <li>Technology</li>
                <li>Government</li>
                <li>Energy & Utilities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p>Email: elewis@sbtsgroup.com</p>
                <p>Phone: +1-571-276-2203</p>
                <p>HQ: Washington, DC</p>
                <p>Global Delivery</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 SBTS Security. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
