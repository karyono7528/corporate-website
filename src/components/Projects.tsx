"use client"

import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'renewable', name: 'Renewable Energy' },
    { id: 'oil-gas', name: 'Oil & Gas' },
    { id: 'infrastructure', name: 'Infrastructure' },
  ];

  const projects = [
    {
      title: "Solar Power Plant",
      location: "East Java, Indonesia",
      category: "renewable",
      image: "/projects/solar-plant.jpg",
      description: "100MW solar power plant providing clean energy to over 50,000 homes.",
    },
    {
      title: "Offshore Platform",
      location: "South China Sea",
      category: "oil-gas",
      image: "/projects/offshore.jpg",
      description: "State-of-the-art offshore drilling platform with advanced safety systems.",
    },
    {
      title: "Wind Farm",
      location: "West Java, Indonesia",
      category: "renewable",
      image: "/projects/wind-farm.jpg",
      description: "Wind energy project generating 75MW of sustainable power.",
    },
    {
      title: "Gas Processing Facility",
      location: "Kalimantan, Indonesia",
      category: "oil-gas",
      image: "/projects/gas-facility.jpg",
      description: "Modern gas processing facility with environmental protection systems.",
    },
    {
      title: "Energy Storage Facility",
      location: "Central Java, Indonesia",
      category: "infrastructure",
      image: "/projects/storage.jpg",
      description: "Advanced energy storage solution for grid stability.",
    },
    {
      title: "Distribution Network",
      location: "Multiple Locations",
      category: "infrastructure",
      image: "/projects/distribution.jpg",
      description: "Nationwide energy distribution network upgrade project.",
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our innovative energy projects across Indonesia and beyond
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-2">{project.location}</p>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
