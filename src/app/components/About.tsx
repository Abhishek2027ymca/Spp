import { Award, Users, Clock, MapPin, TrendingUp, Shield, Target, Briefcase, Zap, CheckCircle2, Star, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Clients', color: 'from-blue-500 to-blue-600' },
    { icon: Clock, value: '15+', label: 'Years Experience', color: 'from-orange-500 to-orange-600' },
    { icon: Award, value: '100%', label: 'Quality Assured', color: 'from-green-500 to-green-600' },
    { icon: TrendingUp, value: '50K+', label: 'Projects Completed', color: 'from-purple-500 to-purple-600' },
  ];

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use state-of-the-art printing technology to deliver exceptional quality prints that exceed expectations.',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising quality. We understand your deadlines and work efficiently to meet them.',
    },
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: 'Serving Jammu & Bari Brahmana for over 15 years with commitment to excellence and customer satisfaction.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const trustReasons = [
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Every print is meticulously checked for color accuracy and quality standards with advanced calibration systems',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Briefcase,
      title: 'Professional Service',
      description: 'Dedicated support from consultation to delivery, ensuring smooth execution and client satisfaction',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'Modern printing equipment and software for superior results and faster turnaround times',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with comprehensive quality assurance and customer satisfaction guarantee',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Star,
      title: 'Competitive Pricing',
      description: 'Best value for money with transparent pricing and no hidden costs for all our services',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: ThumbsUp,
      title: 'Customer First',
      description: 'Your satisfaction is our priority with personalized attention and responsive customer support',
      gradient: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1570978541623-fe3fbe775696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwd29ya3NwYWNlJTIwaW5kdXN0cmlhbCUyMG1vZGVybnxlbnwxfHx8fDE3NzY4NTY1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-orange-50/85" />
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm mb-4">
            About Us
          </span>
          <h2 className="text-4xl lg:text-5xl text-blue-900 mb-4">
            Your Trusted Printing Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence in printing services with cutting-edge technology and unwavering commitment to quality
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1495846111602-a16f6a1ede09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwcHJpbnRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2MzI1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Business Cards Printing"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1742967416368-bbc8a227ae39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHF1YWxpdHklMjBjb250cm9sJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NzYzMjUwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Quality Control"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1695634621145-9133286e0247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZSUyMGRlc2lnbiUyMHByaW50aW5nfGVufDF8fHx8MTc3NjMyNTA5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Brochure Design"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1616964666162-31f61986d9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwb2ZmaWNlJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzc2MzI0OTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Stationery Supplies"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
 <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={isInView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="absolute -bottom-6 -right-6 overflow-hidden rounded-xl shadow-xl border border-white/40"
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1758183961426-88d64eb5f787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300')`,
    }}
  />
  {/* Light gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-orange-50/90 backdrop-blur-sm" />

  {/* Content */}
  <div className="relative z-10 px-5 py-4 flex items-center gap-3">
    <div className="bg-orange-500 p-2 rounded-lg flex-shrink-0">
      <svg className="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div>
      <p className="text-2xl font-bold text-blue-900 leading-none">15+</p>
      <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-0.5">Years of Excellence</p>
    </div>
  </div>
</motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl text-blue-900 mb-6">
              Experience the Difference in Quality Printing
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Saini Offset Printing Press has been the cornerstone of quality printing services in <span className="text-blue-900">Bari Brahmana, Jammu</span> for over 15 years. We've built our reputation on delivering exceptional print quality, reliable service, and unwavering commitment to our clients.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From small businesses to large enterprises, we provide comprehensive printing solutions including offset printing, screen printing, digital printing, and complete stationery supplies. Our experienced team ensures every project meets the highest standards of quality and precision.
            </p>

            {/* Location Highlight */}
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl mb-8">
              <MapPin className="size-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-blue-900 mb-1">Conveniently Located</p>
                <p className="text-gray-600 text-sm">
                  Dogra Shopping Complex, Industrial Chowk, Bari Brahmana, Jammu
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="size-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-blue-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Enhanced */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 relative"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white rounded-xl p-4 lg:p-5 shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Animated Border Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />

              <div className="relative flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg mb-3 shadow-lg group-hover:shadow-xl`}
                >
                  <stat.icon className="size-6 text-white" />
                </motion.div>
                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: 'spring' }}
                  className="text-2xl lg:text-3xl text-blue-900 mb-1"
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-600 text-xs lg:text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>

      {/* Why Businesses Trust Us Section - Enhanced with Background */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1622622291472-9ae2e793a7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcmludGluZyUyMHByZXNzJTIwd29ya3NwYWNlJTIwaW5kdXN0cmlhbCUyMG1vZGVybnxlbnwxfHx8fDE3NzY4NTY1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/93 to-orange-900/90" />

          {/* Animated Pattern Overlay */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-300 px-6 py-2 rounded-full text-sm tracking-wider uppercase mb-6"
            >
              Our Commitment
            </motion.div>

            <h3 className="text-4xl lg:text-5xl text-white mb-4">
              Why Businesses <span className="text-orange-400">Trust Us</span>
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Built on excellence, powered by innovation, and driven by your success
            </p>
          </motion.div>

          {/* Trust Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-400/50 transition-all duration-300"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex bg-gradient-to-br ${reason.gradient} p-4 rounded-xl mb-4 shadow-lg group-hover:shadow-2xl`}
                  >
                    <reason.icon className="size-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-xl text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {reason.title}
                  </h4>

                  {/* Description */}
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} rounded-b-2xl origin-left`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
