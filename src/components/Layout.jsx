import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();  // ← added (was missing in your snippet)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // 'instant' = no visible jump
  }, [location.pathname]);
  // Short, clearly named variants — modern convention
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 30,           // start slightly below
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,          // slide up when leaving
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-4 md:pt-8"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}