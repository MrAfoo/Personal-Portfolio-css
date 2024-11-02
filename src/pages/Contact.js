
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full border border-gray-300 p-2 rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full border border-gray-300 p-2 rounded" rows="4" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
