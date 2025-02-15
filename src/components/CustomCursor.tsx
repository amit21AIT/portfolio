import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Create trail effect
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${e.clientX - 3}px`;
      trail.style.top = `${e.clientY - 3}px`;
      trail.style.opacity = '0.5';
      document.body.appendChild(trail);

      // Fade out and remove trail
      setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(trail);
        }, 200);
      }, 100);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).classList.contains('card')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 12,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 500,
          rotate: {
            type: "spring",
            damping: 20,
            stiffness: 200,
          },
        }}
      />
      <motion.div
        className={`cursor-outline ${isHovering ? 'hover' : ''}`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
    </>
  );
};

export default CustomCursor;