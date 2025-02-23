
"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center bg-black px-12 py-20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Texto alineado a la izquierda */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Sobre Mí
          </h1>
          <br></br>
          <h5 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Pasión por la Innovación
          </h5>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Soy una entusiasta de la tecnología con pasión por la innovación y la resolución de problemas. Me especializo en desarrollo web y bases de datos, con enfoque en rendimiento y escalabilidad.
          </p>
        </div>
      </div>

      {/* Imagen fusionada en el lado derecho */}
      <div className="absolute right-0 top-0 h-full w-1/3">
        <div className="relative w-full h-full">
          <Image
            src="/icons/katy.jpg" // Asegúrate de reemplazar esto con tu imagen real
            alt="Foto de perfil"
            layout="fill"
            objectFit="cover"
            className="mask-radial"
          />
        </div>
      </div>

      {/* Estilos personalizados para fusión */}
      <style jsx>{`
        .mask-radial {
          mask-image: linear-gradient(to left, transparent, black 40%);
          -webkit-mask-image: linear-gradient(to left, transparent, black 40%);
        }
      `}</style>
    </motion.section>
  );
}

/*"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-pink-500">Sobre Mí</h2>
      <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl">
        Soy una entusiasta de la tecnología con un fuerte interés en el desarrollo de soluciones innovadoras.
      </p>
    </motion.section>
  );
}
*/


/*export default function AboutMe() {
  const [imageSrc, setImageSrc] = useState("/loto.jpeg"); // Imagen predeterminada

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Usa opcional chaining para evitar errores
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white px-10 py-16">
      {// Sección de texto }
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-pink-500">Sobre Mí</h1>
        <h2 className="text-xl font-semibold text-purple-400 mt-4">Pasión por la innovación</h2>
        <p className="mt-4 text-gray-300">
          Soy una entusiasta de la tecnología con un fuerte interés en el desarrollo de soluciones innovadoras.
          Me apasiona explorar las posibilidades de la tecnología y aplicarla para resolver problemas.
        </p>
      </div>

      {// Sección de imagen }
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="relative w-80 h-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt="Perfil"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}



/*export default function About() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h2 className="text-3xl font-semibold">Sobre mí</h2>
        <p className="mt-4 text-lg text-center">
          Soy un desarrollador apasionado por la tecnología, con experiencia en frontend y backend. Trabajo con frameworks modernos y busco siempre mejorar mis habilidades.
        </p>
      </div>
    );
  }*/


  
