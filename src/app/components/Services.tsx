import { Printer, Layers, Zap, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useInView } from './hooks/useInView';

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Printer,
      title: 'Offset Printing',
      description: 'High-quality bulk printing for all your business needs',
      items: [
        'Visiting Cards / Business Cards',
        'Letterheads & Envelopes',
        'Pamphlets & Brochures',
        'Catalogs',
        'Bill Books / Invoice Books',
      ],
      color: 'blue',
    },
    {
      icon: Layers,
      title: 'Screen Printing',
      description: 'Versatile printing for various materials and surfaces',
      items: [
        'Stickers & Labels',
        'Plastic / Packaging Printing',
        'Promotional Items',
        'Custom Materials',
      ],
      color: 'orange',
    },
    {
      icon: Zap,
      title: 'Digital Printing',
      description: 'Fast and efficient printing for small quantity orders',
      items: [
        'Posters & Flyers',
        'Certificates',
        'ID Cards',
        'Custom Prints',
      ],
      color: 'green',
    },
    {
      icon: Package,
      title: 'Stationery Supply',
      description: 'Complete office stationery solutions',
      items: [
        'Office Stationery',
        'Printed Notebooks',
        'Files and Folders',
        'Receipt Books',
      ],
      color: 'purple',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      light: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-500',
    },
    orange: {
      bg: 'bg-orange-500',
      light: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      hover: 'hover:border-orange-500',
    },
    green: {
      bg: 'bg-green-500',
      light: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200',
      hover: 'hover:border-green-500',
    },
    purple: {
      bg: 'bg-purple-500',
      light: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-500',
    },
  };

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-md mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl text-blue-900 mb-4">
            Comprehensive Printing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From traditional offset printing to modern digital solutions, we offer complete printing services tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 transition-all hover:shadow-xl hover:scale-105`}
              >
                <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="size-7 text-white" />
                </div>
                
                <h3 className="text-xl text-blue-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`${colors.text} mt-1`}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl text-blue-900 mb-4">
              Need a Custom Printing Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We specialize in customized printing projects. Contact us to discuss your specific requirements and get a personalized quote.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all hover:shadow-lg hover:scale-105"
            >
              Discuss Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}