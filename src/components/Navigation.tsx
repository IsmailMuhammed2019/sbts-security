"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Phone, Mail } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Industries", href: "#industries" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg text-slate-900">SBTS Security</div>
              <div className="text-xs text-slate-500">Enterprise Cybersecurity</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Phone className="w-4 h-4" />
              <span>+1-571-276-2203</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Mail className="w-4 h-4" />
              <span>elewis@sbtsgroup.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Get Assessment
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Contact Sales
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="w-4 h-4" />
                  <span>+1-571-276-2203</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="w-4 h-4" />
                  <span>elewis@sbtsgroup.com</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Get Assessment
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

