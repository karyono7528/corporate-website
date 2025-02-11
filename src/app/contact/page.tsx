import Footer from '@/components/Footer';
import Navbar from '@/components/Header';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-600">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border rounded-md" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border rounded-md" 
                    placeholder="your.email@example.com" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full px-3 py-2 border rounded-md" 
                    rows={4} 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Corporate Headquarters</h3>
                  <p>123 Maritime Street</p>
                  <p>Energy City, EC 54321</p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@corporateenergy.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
