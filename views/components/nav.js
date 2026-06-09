const navbar = document.querySelector('#navbar');

const createNavHome = () => {
    navbar.innerHTML = `<div
      class="pt-16 h-screen flex justify-center items-center flex-col px-4 gap-4 md:flex-row lg:w-3/5 md:w-9/12 md:mx-auto md:gap-8"
    >
      <h1 class="text-indigo-700 font-bold text-4xl md:text-6xl">TodoApp</h1>
      <div class="flex flex-col gap-4 md:text-xl">
        <p class="text-justify">
          Primer Commit del proyecto, 
          el cual se trata de una aplicación de tareas, 
          donde el usuario podrá crear, editar y eliminar tareas, 
          además de marcar las tareas como completadas o pendientes.
          El proyecto está desarrollado con Python y Flask en el backend, 
          y Tailwind CSS en el frontend. 
        </p>
        <div class="flex justify-around gap-4">
          <a
            class="bg-slate-600 py-2 px-4 rounded-lg text-white font-bold hover:bg-slate-700 w-2/4 text-center transition-ease-in-out delay-150"
            href="/login/"
            >Login</a
          >
          <a
            class="bg-indigo-700 py-2 px-4 rounded-lg text-white font-bold hover:bg-indigo-800 w-2/4 text-center transition-ease-in-out delay-150"
            href="/signup/"
            >Registro</a
          >
        </div>
      </div>
    </div>`;
};

createNavHome();