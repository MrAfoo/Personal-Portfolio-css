import React from 'react';
import resImage from './res.png'

const Projects = () => {
    return (
        <div className="p-6 bg-gray-100 text-gray-900">
            <h2 className="text-3xl font-semibold text-center mb-6">My Projects</h2>
            <div className="space-y-8">
                <div className="bg-white shadow-lg rounded-md p-4 flex flex-col md:flex-row items-center hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <img 
                        src={resImage} 
                        alt="Project 1 Preview" 
                        className="w-full md:w-1/3 h-auto rounded-md mb-4 md:mb-0 md:mr-6 object-cover"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-semibold">Dynamic Resume Builder</h3>
                        <p className="mt-2">Created Dynamic Resume Builder with React JS, Html and CSS.You can Download,Edit and Share you generated resume.</p>
                        <a
                            href="https://your-project1-url.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline mt-4"
                        >
                            View Project
                        </a>
                    </div>
                </div>

                {/* Repeat for other projects */}
            </div>
        </div>
    );
};

export default Projects;



  