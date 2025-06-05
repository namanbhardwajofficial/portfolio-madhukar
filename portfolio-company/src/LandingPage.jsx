import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Brand</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left px-3 py-2 text-white hover:text-purple-300 transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-3 py-2 text-white hover:text-purple-300 transition-colors duration-200"
                >
                  About us
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="block w-full text-left px-3 py-2 text-white hover:text-purple-300 transition-colors duration-200"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left px-3 py-2 text-white hover:text-purple-300 transition-colors duration-200"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Transform Your Business with{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Innovation
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Discover cutting-edge solutions that drive growth and
                  streamline your operations. Experience the future of business
                  technology today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Product Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How to use our Product?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Follow these simple steps to get started and maximize your
              productivity
            </p>
          </div>

          <div className="space-y-16">
            {/* Row 1 */}
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                isVisible.about
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Setup & Configuration
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Get started quickly with our intuitive setup process.
                  Configure your preferences and customize the platform to match
                  your workflow in just a few clicks.
                </p>
                <div className="flex items-center space-x-2 text-purple-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Quick 5-minute setup</span>
                </div>
              </div>
              <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-60"></div>
              </div>
            </div>

            {/* Row 2 */}
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${
                isVisible.about
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center lg:order-1">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg opacity-60"></div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Integration & Automation
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Seamlessly integrate with your existing tools and automate
                  repetitive tasks. Connect with 100+ popular platforms and
                  streamline your entire workflow.
                </p>
                <div className="flex items-center space-x-2 text-blue-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>100+ integrations available</span>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-400 ${
                isVisible.about
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Monitor & Optimize
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Track your progress with detailed analytics and insights. Use
                  our AI-powered recommendations to continuously optimize your
                  performance and achieve better results.
                </p>
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Real-time analytics dashboard</span>
                </div>
              </div>
              <div className="aspect-video rounded-xl bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Select the perfect plan for your needs. Upgrade or downgrade at
              any time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300">Perfect for small teams</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Up to 5 team members</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>10GB storage</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Basic integrations</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/50 rounded-2xl p-8 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$79</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300">Ideal for growing businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Up to 25 team members</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>100GB storage</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Advanced integrations</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Enterprise
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300">For large organizations</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>1TB storage</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 dedicated support</span>
                </li>
              </ul>
              <button className="w-full py-3 px-6 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Get in touch with us
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Ready to transform your business? Contact our team to learn
                  more about our solutions and how we can help you achieve your
                  goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-300">hello@company.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Address</h3>
                    <p className="text-gray-300">
                      123 Business St, Suite 100
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={() =>
                    alert("Message sent! We will get back to you soon.")
                  }
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Brand</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2025 Brand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
