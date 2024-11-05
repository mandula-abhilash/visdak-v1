'use client';

import React, { useEffect, useRef } from 'react';
import { Globe2, Code, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const cards = heroRef.current.querySelectorAll('.hero-card');
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      cards.forEach((card) => {
        const cardRect = (card as HTMLElement).getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const angleX = (centerY - e.clientY) * 0.01;
        const angleY = (e.clientX - centerX) * 0.01;
        
        (card as HTMLElement).style.transform = 
          `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-primary-navy">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-mesh opacity-30" />
      <div className="absolute top-1/4 left-1/4 hero-glow" />
      <div className="absolute bottom-1/4 right-1/4 hero-glow" 
           style={{ animationDelay: '-4s' }} />

      {/* Geometric Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="geometric-pattern"
            style={{
              top: `${30 + i * 20}%`,
              left: `${20 + i * 25}%`,
              width: '300px',
              height: '300px',
              borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
              border: '2px solid rgba(0, 255, 127, 0.1)',
              animationDelay: `${-i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Empowering 
              <span className="bg-gradient-to-r from-primary-emerald to-primary-light bg-clip-text text-transparent"> Local Businesses</span>
              <br />
              with Global Tech
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl">
              From our base in Nandikandi, we're revolutionizing how rural tech companies deliver world-class digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#contact"
                className="interactive-card px-8 py-4 bg-primary-emerald text-primary-navy rounded-xl font-semibold hover:bg-primary-light transition-all inline-flex items-center justify-center group"
              >
                Start Your Journey
                <Rocket className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-all" />
              </Link>
              <Link 
                href="#services"
                className="interactive-card px-8 py-4 border-2 border-primary-emerald text-primary-emerald rounded-xl font-semibold hover:bg-primary-emerald hover:text-primary-navy transition-all inline-flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Interactive 3D Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {[
              { Icon: Globe2, top: '10%', left: '20%', size: 'h-20 w-20', delay: 0 },
              { Icon: Code, top: '40%', left: '60%', size: 'h-24 w-24', delay: 2 },
              { Icon: Rocket, top: '70%', left: '30%', size: 'h-16 w-16', delay: 4 }
            ].map(({ Icon, top, left, size, delay }, index) => (
              <div
                key={index}
                className="absolute hero-card rounded-2xl p-8 floating-element"
                style={{ 
                  top, 
                  left,
                  animationDelay: `-${delay}s`
                }}
              >
                <Icon className={`${size} text-primary-emerald`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}