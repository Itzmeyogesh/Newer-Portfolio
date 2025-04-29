import { motion } from 'framer-motion';
import { Home, User, FolderOpen, Star, Mail } from 'lucide-react';
import React from 'react';

const navItems = [
  { href: "#home", label: "Home", icon: <Home size={20} /> },
  { href: "#about", label: "About", icon: <User size={20} /> },
  { href: "#projects", label: "Projects", icon: <FolderOpen size={20} /> },
  { href: "#skills", label: "Skills", icon: <Star size={20} /> },
  { href: "#contact", label: "Contact", icon: <Mail size={20} /> },
];

const Sidebar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-full flex flex-col items-center z-30 overflow-hidden"
      initial={{ width: "5.5%" }}
      whileHover={{ width: "12%" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Sidebar background and content */}
      <div className="h-full w-full bg-gradient-to-b from-blue-800 to-purple-900 p-2 shadow-2xl">
        <ul className="flex flex-col space-y-6 mt-16 w-full items-start">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="group flex items-center space-x-3 text-white text-sm font-medium cursor-pointer hover:text-yellow-300 transition-all duration-300 w-full px-4"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <span className="hidden group-hover:inline-block transition-opacity duration-300">
                {item.label}
              </span>
            </motion.a>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
