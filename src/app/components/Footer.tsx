import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">SAINI</h3>
              <p className="text-orange-400 text-sm">Offset Printing Press</p>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              A Home of Quality Printing - Serving Jammu & Bari Brahmana with professional printing solutions for over 15 years.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-blue-200 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>Offset Printing</li>
              <li>Screen Printing</li>
              <li>Digital Printing</li>
              <li>Business Cards</li>
              <li>Brochures & Catalogs</li>
              <li>Stationery Supply</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:9419311049" className="hover:text-white transition-colors block">
                    9419311049
                  </a>
                  <a href="tel:7780905175" className="hover:text-white transition-colors block">
                    7780905175
                  </a>
                  <a href="tel:01923293170" className="hover:text-white transition-colors block">
                    01923-293170
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:rptraders48@gmail.com" className="hover:text-white transition-colors block">
                    rptraders48@gmail.com
                  </a>
                  <a href="mailto:rpsaini1@yahoo.com" className="hover:text-white transition-colors block">
                    rpsaini1@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>
                  Dogra Shopping Complex, Industrial Chowk, Bari Brahmana, Jammu
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <p>
              © {currentYear} Saini Offset Printing Press. All rights reserved.
            </p>
            <p>
              Contact Person: <span className="text-white">Ram Paul</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
