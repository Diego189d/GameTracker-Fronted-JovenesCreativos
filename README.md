GameTracker — Frontend

Frontend creado con React + Vite para interactuar con el backend del proyecto GameTracker.
Permite crear tareas y mostrarlas en pantalla consumiendo la API REST creada en el backend.

Tecnologías que usé:

React

Vite

Hooks (useState, useEffect)

Fetch API

Estructura de mi proyecto
frontend/
│── src/
│     ├── components/
│     │     └── TaskCreator.jsx
│     ├── App.jsx
│     └── main.jsx
│── index.html
│── vite.config.js
│── package.json
│── package-lock.json

⚙️ Instalación y ejecución
1️ Clonar el repositorio
git clone https://github.com/TU_USUARIO/GameTracker-Frontend.git
cd GameTracker-Frontend

2️  Instalar dependencias
npm install

3️  Ejecutar en modo desarrollo
npm run dev


La aplicación abre generalmente en:

http://localhost:5173

Conexión con el Backend:

El frontend consume la API en:

http://localhost:5001/api/tasks


Asegúrate de que el backend esté corriendo para que la app funcione correctamente.

 Funciones:

✔ Crear nuevas tareas
✔ Mostrar todas las tareas
✔ Validación básica de campos
✔ Interfaz simple y funcional


🧑‍💻 Autor

Proyecto desarrollado como parte de la actividad MERN final.
