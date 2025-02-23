
"use client";
import { SiPhp, SiCodeigniter, SiMysql, SiXampp, SiDotnet, SiBootstrap, SiAndroidstudio, SiKotlin, SiMongodb, SiPython } from "react-icons/si";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen bg-black px-12 py-20 overflow-hidden">      
      
      <div className="container mx-auto flex flex-col items-center gap-10">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Experiencia en Tecnologías
        </h2>
      </div>

      {/* Secciones */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 text-white">
        {/* Backend */}
        <div className="p-5 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold text-pink-500">Backend</h3>
          <div className="flex gap-4 mt-3 text-4xl">
            <SiPhp className="text-blue-500" />
            <SiCodeigniter className="text-red-500" />
            <SiMysql className="text-yellow-500" />
            <SiXampp className="text-orange-500" />
          </div>
        </div>

       {/* Frontend */}
        <div className="p-5 border border-gray-700 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-400">Frontend</h3>
        <div className="flex gap-4 mt-3 text-4xl items-center">
            <SiDotnet className="text-purple-500" />
            <Image 
            src="/icons/c-sharp.png" 
            alt="C#" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain" 
            />
            <SiBootstrap className="text-indigo-500" />
            <Image 
            src="/icons/sql-server.png" 
            alt="SQL Server" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain" 
            />
        </div>
        </div>

        {/* Móvil */}
        <div className="p-5 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold text-green-400">Móvil</h3>
          <div className="flex gap-4 mt-3 text-4xl">
            <SiAndroidstudio className="text-green-500" />
            <SiKotlin className="text-orange-500" />
            <SiMongodb className="text-green-400" />
            <SiPython className="text-yellow-500" />
          </div>
        </div>

        {/* Azure
        <div className="p-5 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-500">Azure</h3>
          <div className="flex gap-4 mt-3 text-4xl">
            <Image src="/icons/azuredevops.png" alt="Azure DevOps" width={40} height={40} />
            <Image src="/icons/azurevm.png" alt="Azure VM" width={40} height={40} />
            <Image src="/icons/cosmosdb.png" alt="Azure Cosmos DB" width={40} height={40} />
            <Image src="/icons/azurefunctions.png" alt="Azure Functions" width={40} height={40} />
          </div>
        </div>*/}

      </div>
    </section>
  );
}