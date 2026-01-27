import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import { motion, AnimatePresence } from "framer-motion";

function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#050505]
  bg-[radial-gradient(circle_at_50%_50%,#7c3aed20,transparent_60%),radial-gradient(#ffffff08_2px,transparent_2px)]
  bg-[size:100%_100%,12px_12px]
  text-white font-sans antialiased scroll-smooth
  selection:bg-violet-800 selection:text-white">
      {/* Navbar represents the global navigation */}
      <Navbar />
      
      {/* Main Content Area */}
      <main className={isHomePage || location.pathname.includes('roadmap') || location.pathname.includes('tutor') ? "w-full flex-grow" : "p-6 max-w-[1400px] mx-auto w-full flex-grow"}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    {location.pathname !== "/ai-tutor" && <Footer />}
    </div>
  );
}

export default MainLayout;
