import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/KS.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

function Navbar() {
  const location = useLocation();
  const activeId = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Logo - Desktop only */}
      <Link
        to="/"
        className="hidden sm:block fixed top-6 left-8 z-50 w-14 h-14 rounded-full overflow-hidden border border-white/20"
      >
        <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-6 right-6 z-50 p-2 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-full text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navbar */}
      <div className="hidden sm:block fixed top-4 left-1/2 -translate-x-1/2 z-40">
        <nav className="relative flex gap-1 p-2 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-full">
          {links.map((link) => (
            <Link key={link.path} to={link.path}>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className={`relative px-5 py-2.5 text-sm font-mono rounded-full transition ${activeId === link.path
                  ? "text-black"
                  : "text-neutral-400 hover:text-white"
                  }`}
              >
                {activeId === link.path && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navbar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-lg"
          >
            <nav className="flex flex-col items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={`text-2xl font-mono ${activeId === link.path ? "text-white" : "text-neutral-400"
                      }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
