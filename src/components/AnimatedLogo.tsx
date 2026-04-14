import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import { outerRingVariants, glowPulseVariants, hoverVariants } from './utils/logoAnimations';
import './styles/AnimatedLogo.css';

const AnimatedLogo: React.FC = () => {
  return (
    <motion.div 
      className="animated-logo-container navbar-logo-img"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={hoverVariants}
    >
      {/* Soft Glow Aura (Breathing effect) */}
      <motion.div 
        className="logo-glow"
        variants={glowPulseVariants}
        animate="animate"
      />

      {/* Outer Rotating Gradient Ring */}
      <motion.div 
        className="logo-outer-ring"
        variants={outerRingVariants}
        animate="animate"
      />

      {/* Glassmorphism Container with Thin Border */}
      <div className="logo-inner-glass">
        <img src={logo} alt="Premium Logo" className="logo-image" />
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;
