import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Globe, Zap, Target, Lock, Eye, Brain, Code, FileText, Building2, GraduationCap, Handshake, TrendingUp, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <Chatbot />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white pt-16">
        <div className="absolute inset-0 bg-black/20"></div>
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
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  Book SOC Demo
                </Button>
              </div>
            </div>
            <div className="relative">
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Security Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From managed SOC operations to DevSecOps, compliance, staffing, and cyber insurance—we're your one-stop security partner.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Handshake className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>White-Label SOC</CardTitle>
                <CardDescription>
                  Enterprise-grade SOC services for MSPs/MSSPs with branded dashboards and dedicated partner support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Branded portals & reporting</li>
                  <li>• Multi-tenant isolation</li>
                  <li>• Sales enablement tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-900">
                About SBTS Security
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">U.S.-Headquartered, Globally Delivered</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                SBTS Security—an SBTS Group company—is a U.S.-headquartered MSSP with a 25-year heritage 
                delivering mission-critical technology and cybersecurity outcomes. Our global SOC and 
                engineering teams deliver always-on protection, with rapid incident response and 
                executive-grade reporting.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">One-stop shop for all security needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Global scale with follow-the-sun operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Partner-friendly white-label solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Outcome-driven business continuity</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Award className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                    <h3 className="font-semibold mb-2">Certified Excellence</h3>
                    <p className="text-sm text-slate-600">ISO 27001, SOC 2, and industry certifications</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 mx-auto mb-3 text-green-600" />
                    <h3 className="font-semibold mb-2">24/7/365 Coverage</h3>
                    <p className="text-sm text-slate-600">Always-on monitoring and response</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-12 h-12 mx-auto mb-3 text-purple-600" />
                    <h3 className="font-semibold mb-2">Global Reach</h3>
                    <p className="text-sm text-slate-600">Multi-continent operations</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-3 text-orange-600" />
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-sm text-slate-600">350+ certified security professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the unique security challenges and compliance requirements of your industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Financial Services", icon: Building2, color: "blue" },
              { name: "Healthcare", icon: Shield, color: "green" },
              { name: "Manufacturing", icon: Target, color: "orange" },
              { name: "Technology", icon: Code, color: "purple" },
              { name: "Government", icon: Lock, color: "red" },
              { name: "Energy & Utilities", icon: Zap, color: "yellow" },
              { name: "Retail & E-commerce", icon: TrendingUp, color: "indigo" },
              { name: "Education", icon: GraduationCap, color: "pink" }
            ].map((industry) => (
              <Card key={industry.name} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-${industry.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${industry.color}-200 transition-colors`}>
                    <industry.icon className={`w-6 h-6 text-${industry.color}-600`} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-slate-600">Specialized security solutions and compliance expertise</p>
                </CardContent>
              </Card>
            ))}
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
    </div>
  );
}
