import { Phone, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Link }  from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { IntroSection } from './IntroSection';
import { WhatWeDoSection} from './WhatWeDoSection'
export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm mb-6 border-2 border-orange-300"
            >
              Trusted Printing Services Since Years
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-6xl lg:text-x7l mb-4"
            >
              <span className="text-blue-900 block">Saini Offset</span>
              <span className="text-orange-600 block">Printing Press</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl text-gray-800 mb-2 italic"
            >
              A Home of Quality Printing
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl text-gray-500 mb-8 max-w-xl"
            >
              Professional offset, screen, and digital printing solutions for businesses and individuals in Jammu & Bari Brahmana.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:9419311049"
                className="flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all hover:shadow-lg hover:scale-105 border-2 border-orange-800"
              >
                <Phone className="size-6" />
                Call Now
              </a>

              <a
                href="https://wa.me/919419311049"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all hover:shadow-lg hover:scale-105 border-2 border-green-800"
              >
                <MessageCircle className="size-6" />
                WhatsApp
              </a>

              <Link
                to="/contact"
                className="flex items-center gap-2 border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-900 hover:text-white transition-all"
              >
                <Mail className="size-6" />
                Get Quote
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div>
                  <p className="text-black-500 mb-1 text-lg">Phone</p>
                  <p className="text-blue-900">9419311049</p>
                </div>
                <div>
                  <p className="text-black mb-1">Office</p>
                  <p className="text-blue-900">01923-293170</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758183961426-88d64eb5f787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwbWFjaGluZSUyMG9mZnNldHxlbnwxfHx8fDE3NzYzMjUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Printing Press Machine"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-2 border-gray-400"
            >
              <div className="flex items-center gap-4 ">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <svg className="size-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl text-blue-900">5000+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>

              </div>

            </motion.div>
          </motion.div>
        </div>
        <div>
      <IntroSection/>
        </div>
        <div>
          <WhatWeDoSection/>
        </div>
      </div>
    </div>
  );
}