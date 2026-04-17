import { Menu, X, Phone, Printer } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
         <img src="./logo.png" alt="Logo" /> 
            <div className="bg-gradient-to-br">
              {/* <Printer className="size-5 text-white" /> */}
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-blue-900 tracking-tight">SAINI</span>
              <span className="text-[14px] text-orange-800 font-medium tracking-wide">
                Offset Printing Press 
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-blue-900'
                    : 'text-gray-500 hover:text-blue-900 hover:bg-blue-50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-orange-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919419311049"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md text-green-500 hover:text-green-600 font-medium transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="tel:9419311049"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-md font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-orange-200 hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Phone className="size-3.5" />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="size-6 text-blue-900" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="size-6 text-blue-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-900'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    )}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-2 flex flex-col gap-2"
              >
                <a
                  href="https://wa.me/919419311049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-green-500 text-green-600 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-50 transition-colors"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:9419311049"
                  className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-colors"
                >
                  <Phone className="size-4" />
                  Call Now
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}