

export default function Projects() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-3xl font-semibold">Mis Proyectos</h2>
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold">Proyecto 1</h3>
            <p className="mt-2 text-sm text-gray-700">Una aplicación web que hace XYZ...</p>
            <a href="#" className="mt-4 text-blue-500">Ver en GitHub</a>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold">Proyecto 2</h3>
            <p className="mt-2 text-sm text-gray-700">Una aplicación móvil que hace ABC...</p>
            <a href="#" className="mt-4 text-blue-500">Ver en GitHub</a>
          </div>
        </div>
      </div>
    );
  }