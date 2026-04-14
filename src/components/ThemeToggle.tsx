import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';
import './styles/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${theme}`} 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <motion.div 
        className="toggle-thumb"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      >
        <motion.div
           initial={{ rotate: -90, opacity: 0 }}
           animate={{ rotate: 0, opacity: 1 }}
           key={theme}
           transition={{ duration: 0.3 }}
           className="toggle-icon-wrapper"
        >
          {theme === 'dark' ? <FiMoon size={12} className="icon-moon" /> : <FiSun size={14} className="icon-sun" />}
        </motion.div>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
