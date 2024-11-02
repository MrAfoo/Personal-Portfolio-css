
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-300">I’m a web developer specializing in creating beautiful and functional websites.</p>
        <a href="#projects" className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">View My Work</a>
      </div>
    </section>
  );
};

export default Home;
