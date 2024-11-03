import React from 'react';
import { FaUser, FaCode, FaTools } from 'react-icons/fa';

const About = () => {
    return (
        <div className="p-8 bg-gray-100 text-gray-800 text-center">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">
                <div className="text-center">
                    <FaUser className="text-5xl text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold">Who I Am</h3>
                    <p className="mt-2 max-w-xs">
                        I'm a passionate developer with a focus on creating amazing experiences through code.
                    </p>
                </div>
                <div className="text-center">
                    <FaCode className="text-5xl text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold">What I Do</h3>
                    <p className="mt-2 max-w-xs">
                        Building responsive websites and working with the latest technologies.
                    </p>
                </div>
                <div className="text-center">
                    <FaTools className="text-5xl text-purple-500 mb-4" />
                    <h3 className="text-xl font-semibold">My Skills</h3>
                    <p className="mt-2 max-w-xs">
                        Proficient in JavaScript, React, and UI/UX design.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
