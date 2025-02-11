"use client"

import { useEffect, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      value: '500K+',
      label: 'Barrels of Oil per Day',
      icon: '⚡',
    },
    {
      value: '1000+',
      label: 'Employees Worldwide',
      icon: '👥',
    },
    {
      value: '30+',
      label: 'Years of Excellence',
      icon: '🏆',
    },
    {
      value: '50+',
      label: 'Global Partners',
      icon: '🤝',
    },
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div id="stats-section" className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center text-white transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
