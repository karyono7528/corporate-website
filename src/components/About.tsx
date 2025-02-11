export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leading the Energy Transformation
            </h2>
            <p className="text-gray-600 mb-6">
              With over two decades of experience in the energy sector, we are committed to
              delivering innovative and sustainable energy solutions that power progress
              and protect our planet for future generations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">20+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">1000+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("/images/about-image.jpg")',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
