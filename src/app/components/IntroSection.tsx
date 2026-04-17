import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function IntroSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Photo with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            {/* Decorative background block */}
            <div className="absolute top-4 left-4 w-full h-full bg-orange-100  rounded-2xl border-2 border-amber-100 opacity-36"  />

            {/* Main photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
              <ImageWithFallback
                src="https://plus.unsplash.com/premium_photo-1682147377676-f33fa2cc20eb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Saini Printing Press — Our Facility"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 right-4 lg:-right-6 bg-orange-400 text-white px-6 py-4 rounded-xl shadow-xl border-white border-1"
            >
              <p className="text-3xl font-bold leading-none ">15+</p>
              <p className="text-sm mt-1 opacity-90">Years of Trust</p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-orange-500 font-semibold text-md tracking-widest uppercase mb-3"
            >
              A Complete Solution for All Your Printing Needs
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-2"
            >
              Saini Offset
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-6"
            >
              Printing Press, Bari Brahmana
            </motion.h3>

            <div className="w-16 h-1 bg-orange-500 rounded-full mb-6" />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-700 text-lg leading-relaxed mb-4"
            >
              At Saini Offset Printing Press, our focus is on producing excellent results that meet and exceed our customers' expectations. We use only top-quality materials and state-of-the-art equipment for offset, screen, and digital printing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-gray-700 text-lg leading-relaxed mb-8"
            >
              Our experienced team ensures every job is completed to specification, on time, and with unfailing attention to quality control at every point of production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                Learn More
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}