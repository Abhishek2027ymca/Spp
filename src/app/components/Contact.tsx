import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi, I'm ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919419311049?text=${encodedMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['9419311049', '7780905175'],
      link: 'tel:9419311049',
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Office Phone',
      details: ['01923-293170'],
      link: 'tel:01923293170',
      color: 'orange',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['rptraders48@gmail.com', 'rpsaini1@yahoo.com'],
      link: 'mailto:rptraders48@gmail.com',
      color: 'green',
    },
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Dogra Shopping Complex', 'Industrial Chowk, Bari Brahmana, Jammu'],
      link: 'https://maps.google.com/?q=Dogra+Shopping+Complex+Industrial+Chowk+Bari+Brahmana+Jammu',
      color: 'purple',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  };

  return (
    <div ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl text-blue-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your printing project? Reach out to us for a quick quote or consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl text-blue-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Service Interested In</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="Offset Printing">Offset Printing</option>
                    <option value="Screen Printing">Screen Printing</option>
                    <option value="Digital Printing">Digital Printing</option>
                    <option value="Stationery Supply">Stationery Supply</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Your Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your printing requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all hover:shadow-lg"
                >
                  <MessageCircle className="size-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.icon === MapPin ? '_blank' : undefined}
                rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className={`${colorClasses[info.color as keyof typeof colorClasses]} p-3 rounded-lg flex-shrink-0`}>
                  <info.icon className="size-6 text-white" />
                </div>
                <div>
                  <h4 className="text-blue-900 mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.a>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl text-white"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                  <Clock className="size-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2">Business Hours</h4>
                  <p className="text-blue-100 text-sm mb-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-blue-100 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Person */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-orange-50 border-2 border-orange-200 p-6 rounded-xl"
            >
              <h4 className="text-blue-900 mb-2">Contact Person</h4>
              <p className="text-gray-700">Ram Paul</p>
              <p className="text-gray-600 text-sm mt-2">
                Feel free to reach out directly for personalized assistance
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="aspect-[21/9] bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.5!2d74.8!3d32.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM2JzAwLjAiTiA3NMKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saini Offset Printing Press Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
