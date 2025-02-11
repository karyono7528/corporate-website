export default function Services() {
  const services = [
    {
      title: "Energy Solutions",
      description: "Comprehensive energy solutions tailored to meet your business needs",
      icon: "⚡",
    },
    {
      title: "Sustainability",
      description: "Green energy initiatives and sustainable development programs",
      icon: "🌱",
    },
    {
      title: "Infrastructure",
      description: "State-of-the-art infrastructure development and maintenance",
      icon: "🏗️",
    },
    {
      title: "Research & Innovation",
      description: "Cutting-edge research and development in energy technology",
      icon: "🔬",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering innovative energy solutions for a sustainable future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
