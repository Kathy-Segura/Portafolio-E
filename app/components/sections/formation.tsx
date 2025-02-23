
"use client";
import { motion } from "framer-motion";
import { FaCode, FaCogs, FaDatabase, FaLaptopCode, FaDesktop, FaServer, FaHtml5, FaCss3Alt } from "react-icons/fa"; // Importa los íconos

export default function Formation() {
  return (
    <section id="formation" className="relative min-h-screen bg-black px-12 py-20 overflow-hidden">
      {/* Elementos animados de fondo */}
      {/* Íconos relacionados con la programación */}
      <motion.div
        className="absolute top-96 left-1/2 text-4xl text-white opacity-50 hover:opacity-80 transition-opacity duration-300"
        animate={{ x: [0, 15, -15, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <FaCode className="text-pink-400" />
      </motion.div>
      <motion.div
        className="absolute top-32 right-1/4 text-4xl text-white opacity-50 hover:opacity-80 transition-opacity duration-300"
        animate={{ x: [0, 15, -15, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      >
        <FaCogs className="text-blue-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/4 text-4xl text-white opacity-50 hover:opacity-80 transition-opacity duration-300"
        animate={{ x: [0, 15, -15, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <FaDatabase className="text-yellow-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-1/4 text-4xl text-white opacity-50 hover:opacity-80 transition-opacity duration-300"
        animate={{ x: [0, 15, -15, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      >
        <FaLaptopCode className="text-teal-400" />
      </motion.div>
      <motion.div
        className="absolute top-16 left-1/2 text-4xl text-white opacity-50 hover:opacity-80 transition-opacity duration-300"
        animate={{ x: [0, 15, -15, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <FaDesktop className="text-green-400" />
      
      </motion.div>
      <motion.div
        className="absolute top-28 right-1/6 text-4xl text-white opacity-50 hover:opacity-80 transition-opacity duration-300"
        animate={{ x: [0, 15, -15, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      >
        <FaHtml5 className="text-orange-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-12 left-1/6 text-4xl text-white opacity-50 hover:opacity-80 transition-opacity duration-300"
        animate={{ x: [0, 15, -15, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      >
        <FaCss3Alt className="text-blue-500" />
      </motion.div>

      <div className="container mx-auto flex flex-col md:flex-row items-start gap-20">
        {/* Título */}
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Formación
        </h2>
      </div>

      {/* Contenedor de información */}
      <div className="container mx-auto flex flex-col md:flex-row gap-20 mt-10">
        {/* Primera columna */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-pink-500">Estudios Universitarios</h3>
          <p className="mt-2 text-lg text-gray-300 leading-relaxed">
            Soy egresado de la carrera ingeniería en sistemas de información en la
            Universidad Nacional de Nicaragua UNAN-Managua.
          </p>
        </div>

        {/* Segunda columna */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-pink-500">Dominio del Idioma Inglés</h3>
          <p className="mt-2 text-lg text-gray-300 leading-relaxed">
            He aprendido inglés de forma autodidacta desde el año 2025 a 2026 y
            actualmente tengo un nivel de B1.
          </p>
        </div>
      </div>
    </section>
  );
}