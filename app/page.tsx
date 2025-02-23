
import Image from "next/image";
import About from "./components/sections/about";
import Contact from "./components/sections/contacts";
import Formation from "./components/sections/formation";
import Skills from "./components/sections/skills";
import Experience from "./components/sections/experience";

export default function Home() {
  return (
    <div>
      {/* Sección de inicio */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-white px-6">
        <div className="absolute inset-0">
          <Image
            src="/icons/background.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="filter saturate-50"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-50 text-left">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Katherine Sofia Segura S.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Descubre mis habilidades, experiencia y proyectos.
          </p>
        </div>
      </section>

      {/* Secciones modulares */}
      <About />
      <Formation/>
      <Skills/>
      <Experience/>
      <Contact />
    </div>
  );
}



/*export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-6">
      {// Imagen de fondo con baja saturación }
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="filter saturate-50"
        />
        {/* Capa oscura encima de la imagen }
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Contenido }
      <div className="relative z-50 text-left">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Katherine Sofia Segura S.
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Descubre mis habilidades, experiencia y proyectos.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 text-white bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600 transition">
            Explorar Proyectos
          </button>
          <button className="px-6 py-3 text-white bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600 transition">
            Conocer Mi Experiencia
          </button>
        </div>
      </div>
    </div>
  );
}


/*export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        Katherine Sofia Segura S.
      </h1>
      <p className="mt-4 text-lg text-gray-300 text-center">
        Descubre mis habilidades, experiencia y proyectos.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 text-white bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600 transition">
          Explorar Proyectos
        </button>
        <button className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition">
          Conocer Mi Experiencia
        </button>
      </div>
    </div>
  );
}*/

/*export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center">¡Bienvenido a mi portafolio!</h1>
      <p className="mt-4 text-lg text-center">Soy un desarrollador web con experiencia en varias tecnologías. Explora mis proyectos y contáctame.</p>
      <button className="mt-6 px-6 py-2 text-white bg-blue-500 rounded-md">Contáctame</button>
    </div>
  );
}*/

/*// app/page.tsx
import { useState } from "react";

export default function Home() {
  const [background, setBackground] = useState("/public/loto.jpeg");

  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.3)",
      }}
    >
      {// Capa de fondo oscura }
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {//Contenido principal }
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Tu Nombre Aquí
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          Descubre mis habilidades, experiencia y proyectos.
        </p>

        {// Botones de acción }
        <div className="mt-6 flex gap-4">
          <a href="/proyectos">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl">
              Explorar Proyectos
            </button>
          </a>
          <a href="/about">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl">
              Conocer Mi Experiencia
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
*/

/*export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}*/
