import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "",
  showCursor = true 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span 
          className={`inline-block w-0.5 h-6 bg-current ml-1 ${
            isComplete ? 'animate-pulse' : 'animate-pulse'
          }`}
        >
          |
        </span>
      )}
    </span>
  );
};

export default TypewriterEffect;