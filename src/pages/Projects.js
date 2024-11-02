
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of project one.",
      image: "/path/to/image1.jpg"
    },
    {
      title: "Project Two",
      description: "A brief description of project two.",
      image: "/path/to/image2.jpg"
    },
    {
      title: "Project Three",
      description: "A brief description of project three.",
      image: "/path/to/image3.jpg"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
