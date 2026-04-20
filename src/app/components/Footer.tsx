import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle, Clock, Printer } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white">

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-700 p-2.5 rounded-xl">
                <Printer className="size-5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-none">SAINI</h3>
                <p className="text-orange-400 text-xs tracking-wide">Offset Printing Press</p>
              </div>
            </div>

            <p className="text-blue-300 text-sm leading-relaxed mb-5">
              A Home of Quality Printing — serving Jammu & Bari Brahmana with professional offset, screen, and digital printing solutions for over 15 years.
            </p>

            {/* Business Hours */}
            <div className="flex items-start gap-2 bg-blue-900/50 border border-blue-800 rounded-xl p-3 mb-5">
              <Clock className="size-4 text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-xs font-semibold mb-0.5">Business Hours</p>
                <p className="text-blue-300 text-xs">Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p className="text-blue-400 text-xs">Sunday: Closed</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-blue-900 hover:bg-blue-800 border border-blue-800 p-2 rounded-lg transition-colors" aria-label="Facebook">
                <Facebook className="size-4 text-blue-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="bg-blue-900 hover:bg-blue-800 border border-blue-800 p-2 rounded-lg transition-colors" aria-label="Instagram">
                <Instagram className="size-4 text-blue-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="bg-blue-900 hover:bg-blue-800 border border-blue-800 p-2 rounded-lg transition-colors" aria-label="LinkedIn">
                <Linkedin className="size-4 text-blue-300" />
              </a>
              <a href="https://wa.me/919419311049" target="_blank" rel="noopener noreferrer"
                className="bg-green-900/50 hover:bg-green-800/50 border border-green-800 p-2 rounded-lg transition-colors" aria-label="WhatsApp">
                <MessageCircle className="size-4 text-green-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5 pb-2 border-b border-blue-800">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-blue-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full group-hover:w-2 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5 pb-2 border-b border-blue-800">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                'Offset Printing',
                'Screen Printing',
                'Digital Printing',
                'Business Cards',
                'Brochures & Catalogs',
                'Stationery Supply',
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm text-blue-300">
                  <span className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5 pb-2 border-b border-blue-800">
              Contact Us
            </h4>
            <ul className="space-y-4">

              {/* Phones */}
              <li>
                <p className="text-orange-400 text-xs uppercase tracking-wider mb-1.5">Phone</p>
                <div className="space-y-1">
                  <a href="tel:9419311049" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm group">
                    <Phone className="size-3.5 text-orange-400 flex-shrink-0" />
                    9419311049
                  </a>
                  <a href="tel:7780905175" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm">
                    <Phone className="size-3.5 text-orange-400 flex-shrink-0" />
                    7780905175
                  </a>
                  <a href="tel:01923293170" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm">
                    <Phone className="size-3.5 text-blue-400 flex-shrink-0" />
                    01923-293170 <span className="text-blue-500 text-xs">(Office)</span>
                  </a>
                </div>
              </li>

              {/* Email */}
              <li>
                <p className="text-orange-400 text-xs uppercase tracking-wider mb-1.5">Email</p>
                <div className="space-y-1">
                  <a href="mailto:rptraders48@gmail.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm">
                    <Mail className="size-3.5 text-orange-400 flex-shrink-0" />
                    rptraders48@gmail.com
                  </a>
                  <a href="mailto:rpsaini1@yahoo.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm">
                    <Mail className="size-3.5 text-orange-400 flex-shrink-0" />
                    rpsaini1@yahoo.com
                  </a>
                </div>
              </li>

              {/* Address */}
              <li>
                <p className="text-orange-400 text-xs uppercase tracking-wider mb-1.5">Address</p>
                <div className="flex items-start gap-2 text-blue-200 text-sm">
                  <MapPin className="size-3.5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>Dogra Shopping Complex, Industrial Chowk, Bari Brahmana, Jammu</span>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/60 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-blue-400">
            <p>© {currentYear} Saini Offset Printing Press. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <p>Contact: <span className="text-white font-medium">Ram Paul</span></p>
              <span className="w-1 h-1 bg-blue-600 rounded-full" />
              <a href="https://wa.me/919419311049" target="_blank" rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}