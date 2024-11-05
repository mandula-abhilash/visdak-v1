import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEw2MCAzMEwzMCA2MEwwIDMwTDMwIDBaIiBmaWxsPSIjMDBGRjdGIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-primary-emerald font-medium">Get in Touch</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you have a question or want to start a project, we're here to help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-emerald/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-emerald/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">contact@visdak.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-emerald/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Visit Us</h3>
                  <p className="text-gray-600">Nandikandi, Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-emerald/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">24/7 Support Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-emerald/5 to-primary-light/5 transform -skew-y-12 group-hover:skew-y-12 transition-transform duration-700" />
            <form className="relative space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-emerald focus:ring-2 focus:ring-primary-emerald/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-emerald focus:ring-2 focus:ring-primary-emerald/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-emerald focus:ring-2 focus:ring-primary-emerald/20 transition-all"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-emerald text-primary-navy py-4 px-8 rounded-lg font-semibold hover:bg-primary-light transition-colors flex items-center justify-center group"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}