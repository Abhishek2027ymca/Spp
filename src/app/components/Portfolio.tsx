import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const portfolioItems = [
    {
      title: 'Business Cards',
      category: 'Offset Printing',
      image: 'https://images.unsplash.com/photo-1495846111602-a16f6a1ede09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwcHJpbnRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc2MzI1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Brochures & Catalogs',
      category: 'Offset Printing',
      image: 'https://images.unsplash.com/photo-1695634621145-9133286e0247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZSUyMGRlc2lnbiUyMHByaW50aW5nfGVufDF8fHx8MTc3NjMyNTA5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Stationery Supplies',
      category: 'Stationery',
      image: 'https://images.unsplash.com/photo-1616964666162-31f61986d9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwb2ZmaWNlJTIwc3VwcGxpZXN8ZW58MXx8fHwxNzc2MzI0OTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Custom Packaging',
      category: 'Screen Printing',
      image: 'https://images.unsplash.com/photo-1742967416368-bbc8a227ae39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHF1YWxpdHklMjBjb250cm9sJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NzYzMjUwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Printing Press',
      category: 'Our Facility',
      image: 'https://images.unsplash.com/photo-1758183961426-88d64eb5f787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwbWFjaGluZSUyMG9mZnNldHxlbnwxfHx8fDE3NzYzMjUwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Professional Team',
      category: 'Our Team',
      image: 'https://images.unsplash.com/photo-1761912915167-558fa68f16b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZSUyMGluZGlhfGVufDF8fHx8MTc3NjMyNTA5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm mb-4">
            Our Work
          </span>
          <h2 className="text-4xl lg:text-5xl text-blue-900 mb-4">
            Portfolio & Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of printing projects and see the quality that sets us apart
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm text-orange-300 mb-1">{item.category}</p>
                <h3 className="text-xl">{item.title}</h3>
              </div>

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Want to see more samples or discuss your printing requirements?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all hover:shadow-lg"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}