# 🔗 Proyecto Conectar

**Conectar** es una aplicación web desarrollada con React, Vite y TypeScript. Su objetivo es ofrecer una experiencia ágil y modular para gestionar actividades, comercios y otros servicios de interés local.

---

## 🧱 Stack Tecnológico

- React 18 + TypeScript
- Vite como bundler
- Zustand para manejo de estado
- React Router DOM para navegación
- Material UI (MUI) para interfaz y componentes
- React Query para gestión de datos remotos
- React Hook Form para formularios
- ESLint + Prettier para mantener el código limpio
- Husky + Commitlint para validar mensajes de commits

---

## 📁 Estructura de Carpetas

```
src/
├── app/               # Configuración principal y rutas
│   ├── router/        # Rutas principales
│   └── App.tsx        # Componente raíz
├── assets/            # Imágenes y archivos estáticos
├── components/        # Componentes reutilizables
├── containers/        # Páginas agrupadas por dominio
│   ├── home/
│   ├── location/
│   ├── login/
│   ├── page-not-found/
│   └── search/
├── contexts/          # React Contexts globales
├── hooks/             # Hooks personalizados
├── layouts/           # Layouts compartidos
├── services/          # Conexión con APIs o mocks
├── tests/             # (Placeholder) Pruebas unitarias
├── themes/            # Configuración de estilos con MUI
├── types/             # Tipos TypeScript globales
├── utils/             # Funciones auxiliares
├── index.css          # Estilos base
├── main.tsx           # Entry point de la app
├── queryClient.ts     # React Query config
└── vite-env.d.ts      # Tipado para Vite
```

---

## 🌱 Flujo de trabajo con Git

Este proyecto trabaja directamente sobre una única rama: `develop`.  
Se recomienda crear ramas locales para cada funcionalidad y luego hacer merge a `develop` cuando estén listas.

Ejemplo de nombres de ramas:

- `feature/nueva-busqueda`
- `fix/ajuste-boton-mapa`
- `chore/limpieza-imports`

---

## 🧪 Commits convencionales

Se siguen las reglas de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para mantener el historial ordenado.

Formato:

```
tipo(scope): descripción corta
```

Ejemplos:

```
feat(login): agrega autenticación con Firebase
fix(map): corrige enlace roto a Google Maps
```

Tipos comunes:

| Tipo  | Descripción              |
| ----- | ------------------------ |
| feat  | Nueva funcionalidad      |
| fix   | Corrección de errores    |
| chore | Tareas menores           |
| test  | Cambios en pruebas       |
| style | Formato o estilo visual  |
| docs  | Cambios en documentación |

---

## ⚙️ Linting y Estilo

- `ESLint` verifica reglas de calidad y errores comunes.
- `Prettier` se encarga del formato (comillas simples, punto y coma, etc).
- Imports ordenados automáticamente con `eslint-plugin-simple-import-sort`.

Comando recomendado antes de cada commit:

```bash
npm run fix
```

Esto aplica linting y formato de forma automática.

---

## 📦 Scripts útiles

| Script               | Qué hace                          |
| -------------------- | --------------------------------- |
| `npm run dev`        | Levanta la app en modo desarrollo |
| `npm run build`      | Compila para producción           |
| `npm run preview`    | Previsualiza la versión compilada |
| `npm run lint`       | Linting del código                |
| `npm run lint:fix`   | Aplica correcciones de linting    |
| `npm run format`     | Revisa formato con Prettier       |
| `npm run format:fix` | Aplica formato automáticamente    |
| `npm run fix`        | Lint + Format automático          |

---

## 💡 Recomendaciones

- Reutilizá componentes siempre que puedas.
- Aprovechá `hooks` para encapsular lógica.
- Usá `Zustand` o contextos cuando el estado lo amerite.
- Documentá tus tipos en `types` o cerca del código.
- Evitá lógica innecesaria en los componentes visuales.

---

## ✨ A futuro...

- Autenticación con Google (via Firebase)
- Dashboard de comercios
- Integración con Firestore
- Métricas de visitas

---

## 📚 Recursos

- [React](https://react.dev)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Hook Form](https://react-hook-form.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

Gracias por sumarte a **Conectar** 💙
