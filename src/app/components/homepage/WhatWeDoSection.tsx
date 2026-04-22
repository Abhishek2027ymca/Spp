import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useInView } from '../hooks/useInView';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Offset Printing',
    description:
      'Saini Offset Printing Press delivers high-quality bulk printing with precision and consistency. Ideal for business cards, letterheads, brochures, catalogs, and bill books.',
    image: 'https://imgs.search.brave.com/0kTMlPS2OXgZvo7E-hhx8fFLpyKFMHK44lLCYpcGb1I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90cmFu/c2Zvcm0ub2N0YW5l/Y2RuLmNvbS9jcm9w/LzcwMHg0OTIvaHR0/cHM6Ly9vY3RhbmVj/ZG4uY29tL2NvbG9y/dmlzaW9ucHJpbnRp/bmdjb20vY29sb3J2/aXNpb25wcmludGlu/Z2NvbV8yNTE2NjA5/OTcuanBn',
  },
  {
    title: 'Screen Printing',
    description:
      'Versatile printing on various materials including stickers, labels, plastic packaging, and promotional items. Perfect for custom surfaces and unique substrates.',
    image: 'https://imgs.search.brave.com/0kTMlPS2OXgZvo7E-hhx8fFLpyKFMHK44lLCYpcGb1I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90cmFu/c2Zvcm0ub2N0YW5l/Y2RuLmNvbS9jcm9w/LzcwMHg0OTIvaHR0/cHM6Ly9vY3RhbmVj/ZG4uY29tL2NvbG9y/dmlzaW9ucHJpbnRp/bmdjb20vY29sb3J2/aXNpb25wcmludGlu/Z2NvbV8yNTE2NjA5/OTcuanBn',
  },
  {
    title: 'Digital Printing',
    description:
      'Fast and cost-effective printing for short runs. Ideal for posters, flyers, certificates, and ID cards — no printing plates needed, quick turnaround guaranteed.',
    image: 'https://imgs.search.brave.com/0kTMlPS2OXgZvo7E-hhx8fFLpyKFMHK44lLCYpcGb1I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90cmFu/c2Zvcm0ub2N0YW5l/Y2RuLmNvbS9jcm9w/LzcwMHg0OTIvaHR0/cHM6Ly9vY3RhbmVj/ZG4uY29tL2NvbG9y/dmlzaW9ucHJpbnRp/bmdjb20vY29sb3J2/aXNpb25wcmludGlu/Z2NvbV8yNTE2NjA5/OTcuanBn',
  },
  {
    title: 'Stationery Supply',
    description:
      'Complete office stationery solutions including printed notebooks, files, folders, receipt books, and all office essentials — sourced and supplied with care.',
    image: 'https://imgs.search.brave.com/0kTMlPS2OXgZvo7E-hhx8fFLpyKFMHK44lLCYpcGb1I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90cmFu/c2Zvcm0ub2N0YW5l/Y2RuLmNvbS9jcm9w/LzcwMHg0OTIvaHR0/cHM6Ly9vY3RhbmVj/ZG4uY29tL2NvbG9y/dmlzaW9ucHJpbnRp/bmdjb20vY29sb3J2/aXNpb25wcmludGlu/Z2NvbV8yNTE2NjA5/OTcuanBn',
  },
];

export function WhatWeDoSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-orange-50 overflow-hidden  border-orange-200 rounded-2xl" >
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-orange-600 font-semibold text-lg tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            What We Do
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            Saini Offset Printing Press offers a complete range of printing solutions — from traditional offset to modern digital, all under one roof.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col border-orange-100 border-2"
            >
              {/* Image */}
              <div className="overflow-hidden h-52">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-black-500 text-md leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Arrow button */}
                <div className="mt-6 flex justify-end">
                  <Link
                    to="/services"
                    className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group/arrow"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowRight className="size-6 transition-transform duration-300 group-hover/arrow:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}