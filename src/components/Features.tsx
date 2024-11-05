'use client';

import React, { useEffect, useRef } from 'react';
import { Globe2, Shield, Rocket, Users, Clock, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Globe2,
      title: "Global Standards",
      description: "Delivering excellence across borders with world-class development practices"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols ensuring your data stays protected"
    },
    {
      icon: Rocket,
      title: "Rapid Development",
      description: "Swift delivery without compromising on quality or reliability"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your personal development squad committed to your success"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for peace of mind"
    },
    {
      icon: HeartHandshake,
      title: "Value-Driven",
      description: "Premium solutions that deliver exceptional value"
    }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      carousel.style.cursor = 'grabbing';
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    });

    // Auto scroll
    const autoScroll = setInterval(() => {
      if (!carousel.matches(':hover')) {
        carousel.scrollLeft += 1;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        }
      }
    }, 50);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <>
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-navy opacity-95">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEw2MCAzMEwzMCA2MEwwIDMwTDMwIDBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9zdmc+')] bg-30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking businesses who trust Visdak for their digital transformation
            </p>
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-emerald text-primary-navy rounded-lg font-semibold hover:bg-primary-light transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-emerald font-medium">Why Visdak?</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              Excellence in Every Pixel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional service delivery
            </p>
          </div>

          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 cursor-grab hide-scrollbar"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory'
            }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="min-w-[300px] flex-shrink-0 scroll-snap-align-start transform transition-all duration-300 hover:scale-105"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full hover:shadow-2xl transition-all duration-500 hover:border-primary-emerald/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-emerald/10 to-primary-light/10 rounded-xl flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12">
                        <Icon className="h-6 w-6 text-primary-emerald" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}