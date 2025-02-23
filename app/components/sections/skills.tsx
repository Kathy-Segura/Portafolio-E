"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="min-h-screen bg-purple-700 px-12 py-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold text-white mb-8">Mis Habilidades</h1>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        <motion.div
          className="bg-purple-900 p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold text-white">Desarrollo Web</h2>
          <p className="text-gray-300 mt-2">
            Manejo de lenguajes de programación web como HTML, CSS y JavaScript, desarrollo de sitios web responsivos y aplicaciones web.
          </p>
        </motion.div>
        <motion.div
          className="bg-purple-900 p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold text-white">Diseño Gráfico</h2>
          <p className="text-gray-300 mt-2">
            Experiencia en diseño gráfico para crear logos, folletos, sitios web y otros materiales de comunicación.
          </p>
        </motion.div>
        <motion.div
          className="bg-purple-900 p-6 rounded-lg shadow-lg md:col-span-2"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold text-white">Marketing Digital</h2>
          <p className="text-gray-300 mt-2">
            Conocimiento de las estrategias de marketing digital, incluyendo SEO, SEM y redes sociales, para aumentar la visibilidad online.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
