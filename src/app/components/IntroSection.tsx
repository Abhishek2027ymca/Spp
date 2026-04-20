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
            <div className="absolute top-4 left-4 w-full h-full bg-orange-100  rounded-2xl border-2 border-amber-100 opacity-22"  />

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
{/* Bottom badge — Years of Trust */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={isInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="absolute -bottom-5 right-2 lg:-right-6 overflow-hidden rounded-xl shadow-2xl border border-white/30"
>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1616964666162-31f61986d9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300')`,
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/90 to-orange-700/90 border-2 border-white/30" />
  <div className="relative z-10 px-6 py-4 flex items-center gap-3">
    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
      <svg className="size-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div>
      <p className="text-3xl font-bold text-white leading-none">15+</p>
      <p className="text-sm text-orange-100 mt-0.5 tracking-wide">Years of Trust</p>
    </div>
  </div>
</motion.div>

{/* Top badge — Projects Completed */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={isInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.5, delay: 0.8 }}
  className="absolute -top-5 left-3 lg:-left-6 overflow-hidden rounded-xl shadow-2xl border-4 border-white/20"
>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1695634621145-9133286e0247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300')`,
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-300/90" />
  <div className="relative z-10 px-6 py-4 flex items-center gap-3">
    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
      <svg className="size-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </div>
    <div>
      <p className="text-2xl font-bold text-white leading-none">50K+</p>
      <p className="text-sm text-blue-200 mt-0.5 tracking-wide">Projects Done</p>
    </div>
  </div>
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