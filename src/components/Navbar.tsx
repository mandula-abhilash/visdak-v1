'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.replace('#', '');
      if (id) {
        const element = document.getElementById(id);
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <nav className="bg-primary-navy shadow-sm fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-light">
            Visdak
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-primary-light transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-primary-light transition-colors">
              About
            </a>
            <a href="#services" className="text-white hover:text-primary-light transition-colors">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-primary-light transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}