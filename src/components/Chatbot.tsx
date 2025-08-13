"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User, ChevronUp, ChevronDown } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const quickPrompts = [
  "What services do you offer?",
  "How much does a security assessment cost?",
  "Tell me about your SOC services",
  "Do you offer compliance consulting?",
  "What's your response time for incidents?",
  "Can you help with cyber insurance?",
  "Do you provide white-label services?",
  "What industries do you serve?"
];

const botResponses: { [key: string]: string } = {
  "What services do you offer?": "SBTS Security offers comprehensive cybersecurity services including:\n\n• Managed SOC & MDR/XDR\n• DevSecOps & Application Security\n• Compliance & GRC (ISO 27001, SOC 2, HIPAA, PCI DSS)\n• Security Staffing & Co-Managed SOC\n• Cyber Insurance Advisory\n• White-Label SOC for MSPs\n• Training & Cyber Academy\n\nWould you like to learn more about any specific service?",
  
  "How much does a security assessment cost?": "Our security assessments are typically priced based on your organization's size and scope. We offer:\n\n• Free initial consultation\n• Comprehensive assessments starting at $5,000\n• Custom enterprise assessments\n\nThe best way to get an accurate quote is to schedule a free consultation. Would you like me to connect you with our team?",
  
  "Tell me about your SOC services": "Our 24/7/365 Security Operations Center (SOC) provides:\n\n• Real-time threat monitoring and detection\n• Incident response with <15 minute SLA\n• Advanced threat hunting and intelligence\n• Executive reporting and dashboards\n• Multi-tenant and white-label options\n\nWe operate a 350-seat state-of-the-art SOC with global coverage. Would you like to see a demo?",
  
  "Do you offer compliance consulting?": "Yes! We provide comprehensive compliance services for:\n\n• ISO 27001 certification\n• SOC 2 Type I & II reports\n• HIPAA/HITECH compliance\n• PCI DSS validation\n• GDPR/CCPA compliance\n• NIST frameworks\n• CMMC readiness\n• NDPR (Nigeria)\n\nOur team includes certified auditors and compliance experts. What framework are you looking to achieve?",
  
  "What's your response time for incidents?": "Our incident response SLAs are:\n\n• Critical incidents: ≤15 minutes\n• Major incidents: ≤4 hours\n• Standard incidents: ≤24 hours\n\nWe provide 24/7/365 coverage with follow-the-sun operations across multiple time zones. All incidents are escalated through our tiered response system.",
  
  "Can you help with cyber insurance?": "Absolutely! Our cyber insurance advisory services include:\n\n• Pre-policy readiness assessments\n• Control gap analysis and remediation\n• Policy review and optimization\n• Claims support and incident response alignment\n• Premium reduction strategies\n\nWe work with major insurers and can help improve your insurability and reduce premiums.",
  
  "Do you provide white-label services?": "Yes! Our white-label SOC program is designed for MSPs and MSSPs:\n\n• Branded dashboards and reporting\n• Multi-tenant isolation\n• API integrations\n• Sales enablement tools\n• Dedicated partner success team\n• Flexible pricing models\n\nPerfect for partners who want enterprise-grade SOC without the CapEx burden.",
  
  "What industries do you serve?": "We serve organizations across all industries:\n\n• Financial Services & Banking\n• Healthcare & Life Sciences\n• Manufacturing & Industrial\n• Technology & SaaS\n• Government & Public Sector\n• Energy & Utilities\n• Retail & E-commerce\n• Education\n\nEach industry has specific compliance and security requirements that we specialize in."
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your SBTS Security assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const response = botResponses[text] || "Thank you for your question! I'd be happy to connect you with one of our security experts who can provide detailed information about your specific needs. Would you like to schedule a consultation?";
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleQuickPrompt = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96">
      <Card className="shadow-2xl border-0">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold">SBTS Security Assistant</h3>
                <p className="text-xs text-blue-100">Online • 24/7 Support</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20"
              >
                {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0">
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-900"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === "bot" && (
                        <Bot className="w-4 h-4 mt-1 flex-shrink-0" />
                      )}
                      <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                      {message.sender === "user" && (
                        <User className="w-4 h-4 mt-1 flex-shrink-0" />
                      )}
                    </div>
                    <div
                      className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-slate-200">
                <p className="text-xs text-slate-600 mb-3">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.slice(0, 4).map((prompt) => (
                    <Badge
                      key={prompt}
                      variant="secondary"
                      className="cursor-pointer hover:bg-blue-100 text-xs"
                      onClick={() => handleQuickPrompt(prompt)}
                    >
                      {prompt}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

