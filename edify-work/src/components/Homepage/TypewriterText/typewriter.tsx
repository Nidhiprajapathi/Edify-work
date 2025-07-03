'use client';

import React, { useEffect, useState } from 'react';

const words = ['Video Editing', 'Graphic Design', 'Social Media Management', 'Video Shoot'];
const typingSpeed = 100;
const deletingSpeed = 60;
const delayBetweenWords = 1000;

const TypewriterText = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
      } else {
        setText(prev => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <h2 className="text-2xl font-normal text-center">
      <span className="bg-gradient-to-r from-pink-700 to-purple-600 bg-clip-text text-transparent">
        {text}
      </span>
      <span className="animate-pulse text-pink-400">|</span>
    </h2>
  );
};

export default TypewriterText;
