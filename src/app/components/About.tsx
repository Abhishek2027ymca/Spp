import { Award, Users, Clock, MapPin, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Clients' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Award, value: '100%', label: 'Quality Assured' },
    { icon: TrendingUp, value: '50K+', label: 'Projects Completed' },
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

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

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
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <p className="text-4xl mb-1">15+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
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

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl mb-4">
                  <stat.icon className="size-8 text-white" />
                </div>
                <p className="text-3xl lg:text-4xl text-blue-900 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm lg:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl mb-6 text-center">
              Why Businesses Trust Us
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-5xl mb-2">🎯</p>
                  <h4 className="text-xl mb-2">Precision & Accuracy</h4>
                  <p className="text-blue-100 text-sm">
                    Every print is meticulously checked for color accuracy and quality standards
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-5xl mb-2">💼</p>
                  <h4 className="text-xl mb-2">Professional Service</h4>
                  <p className="text-blue-100 text-sm">
                    Dedicated support from consultation to delivery, ensuring smooth execution
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-5xl mb-2">⚡</p>
                  <h4 className="text-xl mb-2">Latest Technology</h4>
                  <p className="text-blue-100 text-sm">
                    Modern printing equipment for superior results and faster turnaround
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
