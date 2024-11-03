import React from 'react';

const Contact = () => {
    return (
        <div className="p-8 bg-white text-gray-800">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
            <form className="max-w-md mx-auto space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
                <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
