'use client';

import { useEffect, useState } from 'react';

const CursorLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Fungsi untuk memeriksa mode gelap atau terang
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Pemantauan perubahan kelas 'dark' pada elemen <html>
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Menyimpan status dark mode saat ini (untuk pertama kali)
    handleThemeChange();

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: isDarkMode
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(47, 64, 88, 0.5), rgba(47, 64, 88, 0) 35%)`
          : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(185, 191, 230, 0.5), rgba(185, 191, 230, 0) 35%)`,
        transition: 'background 0.1s ease-out',
      }}
    />
  );
};

export default CursorLight;
