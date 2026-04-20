import { motion } from 'motion/react';
import { Link } from 'react-router';
import { FileText, ShoppingCart, ArrowRight } from 'lucide-react';

export function QuotationSection() {
  const features = [
    {
      icon: FileText,
      title: 'Instant Quote for Printing & Design',
    },
    {
      icon: ShoppingCart,
      title: 'Convenient Ordering Process',
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1699662585308-fcb113a0a4ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcmludGluZyUyMHByZXNzJTIwaW5kdXN0cmlhbCUyMGRlc2lnbiUyMHRleHR1cmV8ZW58MXx8fHwxNzc2NjAyNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/90 to-orange-900/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 px-5 py-1.5 rounded-full text-xs tracking-widest uppercase mb-5">
              Get Your Quote
            </div>

            <h2 className="text-3xl lg:text-5xl text-white mb-3 tracking-tight">
              Feel the Design <span className="text-orange-400">with Us</span>
            </h2>
            <p className="text-blue-200 text-base max-w-xl mx-auto">
              Reach out to us for a quick quote on any printing or design requirement. Fast, simple, and personalized.
            </p>
          </motion.div>

          {/* Features — 2 cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-5 mb-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300 flex items-center gap-4 sm:w-72"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-blue-500/0 group-hover:from-orange-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                <div className="relative bg-orange-500/20 group-hover:bg-orange-500/30 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <feature.icon className="size-6 text-orange-400" />
                </div>
                <p className="relative text-white text-left text-base leading-snug">{feature.title}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full text-base shadow-xl shadow-orange-500/40 hover:shadow-orange-600/50 transition-all duration-300 hover:scale-105"
            >
              Get Quote
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"
          />
        </div>
      </div>
    </section>
  );
}