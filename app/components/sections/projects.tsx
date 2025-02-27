
import Image from 'next/image';
import { FaGithub, FaPlay } from 'react-icons/fa';

const projects = [
  {
    title: 'Desarrollo de Sitio Web',
    description:
      'Creación de un sitio web responsivo con un diseño intuitivo para una empresa local, mejorando su presencia en línea.',
    image: '/icons/pro1.png',
    demoLink: 'https://youtu.be/Te3_VlimRw0?list=RDTe3_VlimRw0',
    githubLink: 'https://github.com/Kathy-Segura/Practica1-SSIS.git',
  },
  {
    title: 'Diseño de Marca',
    description:
      'Desarrollo de un logotipo y una identidad de marca para un nuevo emprendimiento, creando una imagen consistente y atractiva.',
    image: '/icons/pro2.png',
    demoLink: 'https://youtu.be/D9G1VOjN_84',
    githubLink: 'https://github.com/Kathy-Segura/Movil-SegurosAppsNica-Compose.git',
  },
  {
    title: 'Campaña de Marketing Digital',
    description:
      'Implementación de una campaña de marketing digital en redes sociales para aumentar la visibilidad y el engagement de una empresa.',
    image: '/icons/pro3.png',
    demoLink: 'https://youtu.be/0I647GU3Jsc',
    githubLink: 'https://github.com/Kathy-Segura/Practica2-SSIS.git',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-purple-800 py-16 px-8 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-purple-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  className="bg-pink-500 px-4 py-2 rounded flex items-center gap-2 hover:bg-pink-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlay /> Demo
                </a>
                <a
                  href={project.githubLink}
                  className="bg-gray-900 px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}