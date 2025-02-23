"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Título */}
      <h1 className="text-4xl mt-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Contacto</h1> <br/> <br/>
      
      {/* Contenedor de Contacto */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-4xl text-center">
        
        {/* Correo Electrónico */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center space-y-2"
        >
          <FaEnvelope className="text-5xl text-pink-400" />
          <h3 className="text-lg font-semibold">Correo Electrónico</h3>
          <p className="text-gray-300">info@miportafolio.com</p>
        </motion.div>

        {/* Teléfono */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center space-y-2"
        >
          <FaPhone className="text-5xl text-pink-400" />
          <h3 className="text-lg font-semibold">Teléfono</h3>
          <p className="text-gray-300">+55 123 456 7890</p>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center space-y-2"
        >
          <FaLinkedin className="text-5xl text-pink-400 bg-gradient-to-r from-pink-400 to-pink-600 p-2 rounded-lg" />
          <h3 className="text-lg font-semibold">LinkedIn</h3>
          <p className="text-gray-300">linkedin.com/in/miredeprofesional</p>
        </motion.div>

      </div>
    </motion.section>
  );
}