import React from 'react';

const Home = () => {
    return (
        <div className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: 'url(./res.png)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
                    Welcome to My Portfolio
                </h1>
                <p className="text-lg md:text-2xl mb-6 animate-fadeIn">
                    A showcase of my best work and projects
                </p>
                <a
                    href="#projects"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-lg font-medium transition duration-300 animate-bounce"
                >
                    View My Work
                </a>
            </div>
        </div>
    );
};

export default Home;
