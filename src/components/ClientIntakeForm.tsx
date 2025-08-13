"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ChevronRight, ChevronLeft, Building2, Users, Shield, Globe } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  // Company Information
  companyName: string;
  industry: string;
  companySize: string;
  website: string;
  
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  
  // Security Needs
  primaryConcerns: string[];
  currentSecurityTools: string[];
  complianceRequirements: string[];
  budget: string;
  timeline: string;
  
  // Additional Information
  description: string;
  preferredContact: string;
}

const industries = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Technology",
  "Retail",
  "Government",
  "Education",
  "Energy & Utilities",
  "Transportation",
  "Other"
];

const companySizes = [
  "1-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees"
];

const securityConcerns = [
  "Ransomware Protection",
  "Data Breach Prevention",
  "Compliance Requirements",
  "Cloud Security",
  "Endpoint Protection",
  "Network Security",
  "Application Security",
  "Incident Response",
  "Security Awareness Training",
  "Vendor Risk Management"
];

const currentTools = [
  "None",
  "Antivirus Software",
  "Firewall",
  "SIEM",
  "EDR/XDR",
  "VPN",
  "Email Security",
  "Cloud Security Tools",
  "Identity Management",
  "Other"
];

const complianceFrameworks = [
  "None",
  "ISO 27001",
  "SOC 2",
  "HIPAA",
  "PCI DSS",
  "GDPR",
  "NIST",
  "CMMC",
  "NDPR",
  "Other"
];

const budgets = [
  "Under $10K/year",
  "$10K - $50K/year",
  "$50K - $100K/year",
  "$100K - $250K/year",
  "$250K+/year"
];

const timelines = [
  "Immediate (within 30 days)",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Planning phase"
];

export default function ClientIntakeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    industry: "",
    companySize: "",
    website: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    primaryConcerns: [],
    currentSecurityTools: [],
    complianceRequirements: [],
    budget: "",
    timeline: "",
    description: "",
    preferredContact: "email"
  });

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayField = (field: keyof FormData, value: string) => {
    const currentArray = formData[field] as string[];
    if (currentArray.includes(value)) {
      updateFormData(field, currentArray.filter(item => item !== value));
    } else {
      updateFormData(field, [...currentArray, value]);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Here you would typically send the data to your API
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you! We'll be in touch within 24 hours.");
      
      // Reset form
      setFormData({
        companyName: "",
        industry: "",
        companySize: "",
        website: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        primaryConcerns: [],
        currentSecurityTools: [],
        complianceRequirements: [],
        budget: "",
        timeline: "",
        description: "",
        preferredContact: "email"
      });
      setCurrentStep(1);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            index + 1 < currentStep 
              ? "bg-green-500 text-white" 
              : index + 1 === currentStep 
                ? "bg-blue-500 text-white" 
                : "bg-slate-200 text-slate-600"
          }`}>
            {index + 1 < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div className={`w-16 h-0.5 mx-2 ${
              index + 1 < currentStep ? "bg-green-500" : "bg-slate-200"
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Get Your Free Security Assessment</CardTitle>
          <CardDescription>
            Tell us about your organization and security needs. We'll provide a customized assessment and recommendations.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {renderStepIndicator()}

          {/* Step 1: Company Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Company Information</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => updateFormData("companyName", e.target.value)}
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="companySize">Company Size *</Label>
                  <Select value={formData.companySize} onValueChange={(value) => updateFormData("companySize", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizes.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => updateFormData("website", e.target.value)}
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Contact Information</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    placeholder="Enter your last name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => updateFormData("jobTitle", e.target.value)}
                    placeholder="e.g., CISO, IT Director, Security Manager"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Security Needs */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Security Needs & Requirements</h3>
              </div>
              
              <div>
                <Label className="text-base font-medium">Primary Security Concerns *</Label>
                <p className="text-sm text-slate-600 mb-3">Select all that apply</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {securityConcerns.map((concern) => (
                    <div key={concern} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={concern}
                        checked={formData.primaryConcerns.includes(concern)}
                        onChange={() => handleArrayField("primaryConcerns", concern)}
                        className="rounded border-slate-300"
                      />
                      <Label htmlFor={concern} className="text-sm">{concern}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Current Security Tools</Label>
                  <p className="text-sm text-slate-600 mb-3">What security tools are you currently using?</p>
                  <div className="space-y-2">
                    {currentTools.map((tool) => (
                      <div key={tool} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={tool}
                          checked={formData.currentSecurityTools.includes(tool)}
                          onChange={() => handleArrayField("currentSecurityTools", tool)}
                          className="rounded border-slate-300"
                        />
                        <Label htmlFor={tool} className="text-sm">{tool}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label>Compliance Requirements</Label>
                  <p className="text-sm text-slate-600 mb-3">What compliance frameworks do you need to meet?</p>
                  <div className="space-y-2">
                    {complianceFrameworks.map((framework) => (
                      <div key={framework} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={framework}
                          checked={formData.complianceRequirements.includes(framework)}
                          onChange={() => handleArrayField("complianceRequirements", framework)}
                          className="rounded border-slate-300"
                        />
                        <Label htmlFor={framework} className="text-sm">{framework}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Annual Security Budget</Label>
                  <Select value={formData.budget} onValueChange={(value) => updateFormData("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((budget) => (
                        <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Implementation Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => updateFormData("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Additional Information */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Additional Information</h3>
              </div>
              
              <div>
                <Label htmlFor="description">Tell us more about your security challenges</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => updateFormData("description", e.target.value)}
                  placeholder="Describe your current security posture, specific challenges, or any other relevant information..."
                  rows={4}
                />
              </div>
              
              <div>
                <Label>Preferred Contact Method</Label>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="email"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === "email"}
                      onChange={(e) => updateFormData("preferredContact", e.target.value)}
                      className="border-slate-300"
                    />
                    <Label htmlFor="email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="phone"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === "phone"}
                      onChange={(e) => updateFormData("preferredContact", e.target.value)}
                      className="border-slate-300"
                    />
                    <Label htmlFor="phone">Phone</Label>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• We'll review your information within 24 hours</li>
                  <li>• A security expert will contact you to discuss your needs</li>
                  <li>• You'll receive a customized security assessment report</li>
                  <li>• We'll provide recommendations and pricing options</li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            {currentStep < totalSteps ? (
              <Button onClick={nextStep} className="flex items-center gap-2">
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
                Submit Assessment Request
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

