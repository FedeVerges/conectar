# 🚀 Proyecto React con Vite y TypeScript

El proyecto utiliza Vite como bundler y TypeScript para el desarrollo Front-End.

## 🏗️ Estructura del Proyecto

### 📁 Estructura de Carpetas

La estructura del proyecto sigue una organización modular para facilitar la escalabilidad y mantenimiento del código.

```
src/
├── app/               # Configuración principal de la app y enrutamiento
│   └── router/        # Definición de rutas con React Router
├── assets/            # Imágenes y archivos estáticos
├── components/        # Componentes reutilizables (UI, widgets, etc.)
├── containers/        # Páginas de alto nivel divididas por dominio
│   ├── home/
│   ├── location/
│   ├── login/
│   ├── page-not-found/
│   └── search/
├── contexts/          # Contextos globales de React
├── hooks/             # Custom Hooks
├── layouts/           # Layouts reutilizables para vistas
├── services/          # Lógica de negocio y peticiones a APIs
├── tests/             # Pruebas del sistema
├── themes/            # Temas y configuraciones de estilos (ej. MUI)
├── types/             # Tipados globales TypeScript
├── utils/             # Funciones utilitarias
├── index.css          # Estilos globales
├── main.tsx           # Entry point principal de la app
├── queryClient.ts     # Configuración de React Query
└── vite-env.d.ts      # Tipado global para Vite
```

## 🌿 Git Flow

```
🌿 main                    → Rama principal de producción (siempre estable)
│
├── 📥 develop             → Rama de integración o pre-producción (estable con últimos cambios)
│   │
│   ├── ✨ feature/{name}  → Nuevas funcionalidades en desarrollo
│   ├── 🐛 bug/{name}      → Correcciones de errores
│   ├── 🧪 test/{name}     → Implementación o mejora de pruebas
│   └── 🛠️ chore/{name}    → Refactor, configuración, ajustes menores
```

Ejemplos:

- `feature/login-form`
- `bugfix/fix-button-color`
- `test/config-coverage-ui`
- `chore/config-msal`

## 📝 Conventional Commits

El proyecto utiliza Husky para ejecutar CommitLint y hacer validación de mensajes de commit.
Esto asegura que todos los commits cumplan con los estándares.
Los mensajes de commit deben seguir el formato:

```
tipo(scope): descripción
```

Ejemplo:

```
feat(dashboard): consume e implementa datos del servicio
```

### Tipos de commit:

| Tipo  | Descripción                         |
| ----- | ----------------------------------- |
| feat  | Nueva funcionalidad                 |
| fix   | Corrección de errores               |
| docs  | Cambios en documentación            |
| chore | Tareas de mantenimiento             |
| test  | Agregado/modificación de tests      |
| style | Cambios de estilos (no funcionales) |

**scope**: módulo afectado (ej. dashboard, auth).

## ⚙️ Configuración de Linting y Formato

El proyecto utiliza ESLint y Prettier para mantener la consistencia del código.

### 🔍 ESLint Config

- Valida sintaxis TypeScript y React.
- Reglas para hooks de React.
- Ordenamiento automático de imports.
- Detección de código no utilizado.
- Restricción de `console.log` (solo permite `console.warn` y `console.error`).

### 💅 Prettier Config

- 2 espacios de indentación.
- Comillas simples.
- Punto y coma al final.
- Línea máxima de 80 caracteres.
- Formato consistente para archivos TypeScript y tests.

### 📋 Comandos Principales

| Comando              | Descripción                                |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | Ejecuta el servidor de desarrollo Vite     |
| `npm run build`      | Compila para producción                    |
| `npm run preview`    | Previsualiza build de producción           |
| `npm run lint`       | Ejecuta ESLint                             |
| `npm run lint:fix`   | Corrige errores de linting automáticamente |
| `npm run format`     | Verifica formato con Prettier              |
| `npm run format:fix` | Aplica formato automáticamente             |
| `npm run fix`        | Ejecuta lint:fix y format:fix juntos       |

## 🛠️ Sistema de Ordenamiento de Imports (ESLint)

El proyecto utiliza `eslint-plugin-simple-import-sort` para ordenar automáticamente los imports:

### 📚 Categorías de Imports (orden de prioridad)

1. **Built-in/Node modules** (prefijados con `node:`)
2. **Dependencias externas** (de `node_modules`)
3. **Tipos/TypeScript types** (con `import type`)
4. **Alias absolutos** (configurados en vite/tsconfig, ej: `@/`)
5. **Imports relativos padres** (`../`)
6. **Imports relativos hermanos** (`./`)
7. **Assets/Estilos/CSS** (`.css`, `.scss`, `.png`, etc.)

### 🔄 Reglas adicionales:

- **Agrupamiento**: Imports del mismo origen se agrupan.
- **Separación**: Un salto de línea entre grupos diferentes.
- **Orden alfabético**: Dentro de cada grupo, orden A-Z.

Ejemplo:

```typescript
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import type React from 'react';

import queryClient from '../queryClient';
import { lightTheme } from '../themes/theme';
import AppRouter from './router/AppRouter';
```

### 💡 Buenas prácticas:

1. **Tipos siempre primero**: Usar `import type` para tipos de TypeScript.
2. **Alias claros**: Configurar alias como `@/` para imports absolutos.
3. **Separación visual**: Dejar 1 línea entre grupos lógicos.
4. **Evitar imports redundantes**: Remover imports no utilizados.

### 🔄 ¿Cómo se reordena?

Al ejecutar:

```bash
npm run lint:fix
```

ESLint automáticamente:

1. Clasifica cada import en su grupo correspondiente.
2. Ordena alfabéticamente dentro de cada grupo.
3. Agrega separaciones entre grupos.
4. Elimina imports duplicados o no usados.

## 🚀 Recomendaciones de Desarrollo

1. Crear branches descriptivas según el Git Flow.
2. Hacer commits atómicos con mensajes descriptivos.
3. Ejecutar `npm run fix` antes de commitear.
4. Mantener componentes pequeños y reutilizables (modularidad).
5. Usar TypeScript para todos los nuevos desarrollos (crear interfaces, types o enums independientes).

## 📚 Recursos

🔗 [Vite Documentation](https://vitejs.dev/)
🔗 [React Documentation](https://react.dev/)
🔗 [TypeScript Handbook](https://www.typescriptlang.org/docs/)
🔗 [ESLint Rules](https://eslint.org/docs/rules/)
🔗 [Prettier Options](https://prettier.io/docs/en/options.html)
🔗 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

# 🚀 Proyecto "Qué Hacer" - React + Vite + TypeScript

Bienvenido al proyecto **Qué Hacer**, una plataforma que permite explorar comercios y actividades turísticas categorizadas en distintas localidades.

## 🧱 Stack Tecnológico

- **Frontend**: React 18 con TypeScript
- **Empaquetador**: Vite
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Formularios**: React Hook Form
- **Estilos**: Material UI (MUI)
- **Consumo de APIs**: React Query
- **Linting**: ESLint + Prettier
- **Validación de commits**: Husky + Commitlint
- **Testing**: (Placeholder para integración futura)

---

## 📁 Estructura del Proyecto

```bash
src/
├── app/               # Configuración principal y rutas de la aplicación
│   ├── router/        # Rutas definidas con React Router
│   └── App.tsx        # Root component
├── assets/            # Archivos estáticos como imágenes y logos
├── components/        # Componentes reutilizables (UI, widgets, etc.)
├── containers/        # Vistas y páginas principales divididas por dominio
│   ├── home/              # Pantalla de inicio con selector de localidad
│   ├── location/          # Pantalla con información de la localidad
│   ├── login/             # Pantalla de login (Google Auth con Firebase próximamente)
│   ├── page-not-found/    # Página 404
│   └── search/            # Búsqueda de actividades y comercios
├── contexts/          # Contextos globales de React (ej: auth, localidad seleccionada)
├── hooks/             # Custom hooks reutilizables
├── layouts/           # Layouts reutilizables para diferentes vistas
├── services/          # Lógica de negocio y conexión con APIs/mocks
├── tests/             # Carpeta reservada para futuras pruebas unitarias
├── themes/            # Configuración de tema y paleta de colores (Material UI)
├── types/             # Tipados globales TypeScript
├── utils/             # Funciones auxiliares y helpers
├── index.css          # Estilos globales
├── main.tsx           # Punto de entrada de la aplicación
├── queryClient.ts     # Configuración de React Query
└── vite-env.d.ts      # Tipos adicionales de Vite
```

---

## 🚦 Flujo de trabajo Git

Este proyecto utiliza un enfoque basado en ramas:

```bash
main                  → Rama estable de producción
│
├── develop           → Rama de integración y testing
│   ├── feature/xxx   → Nuevas funcionalidades
│   ├── fix/xxx       → Corrección de errores
│   ├── chore/xxx     → Tareas menores o refactorizaciones
│   └── test/xxx      → Mejoras y cobertura de pruebas
```

Ejemplos:

- `feature/login-firebase-auth`
- `fix/search-filter-bug`
- `chore/update-deps`
- `test/search-results`

---

## 🧪 Commits con Convención

Se utiliza el estándar **Conventional Commits**:

```
tipo(scope): descripción breve
```

Ejemplos:

```bash
feat(login): agrega autenticación con Firebase
fix(map): corrige enlace incorrecto a Google Maps
```

### Tipos válidos:

| Tipo  | Descripción                     |
| ----- | ------------------------------- |
| feat  | Nueva funcionalidad             |
| fix   | Corrección de errores           |
| chore | Cambios de mantenimiento        |
| test  | Pruebas o configuración de test |
| style | Cambios de formato (sin lógica) |
| docs  | Cambios en documentación        |

---

## ⚙️ Linting, Formato y Estilo

### ESLint

- Validación de sintaxis de TypeScript y React
- Reglas para hooks
- Ordenamiento automático de imports
- Evita `console.log` en producción

### Prettier

- 2 espacios de indentación
- Comillas simples
- Punto y coma final
- Máximo 80 caracteres por línea

### Imports ordenados

Usamos `eslint-plugin-simple-import-sort`. Reglas:

1. Módulos de Node
2. Dependencias externas
3. Tipos (con `import type`)
4. Alias absolutos (`@/`)
5. Relativos `../`
6. Relativos `./`
7. Assets y CSS

---

## 📦 Scripts disponibles

| Comando              | Acción                                         |
| -------------------- | ---------------------------------------------- |
| `npm run dev`        | Inicia Vite en modo desarrollo                 |
| `npm run build`      | Compila el proyecto para producción            |
| `npm run preview`    | Sirve la build para previsualización           |
| `npm run lint`       | Ejecuta ESLint                                 |
| `npm run lint:fix`   | Corrige automáticamente errores de linting     |
| `npm run format`     | Verifica el formato con Prettier               |
| `npm run format:fix` | Aplica el formato automáticamente con Prettier |
| `npm run fix`        | Ejecuta `lint:fix` + `format:fix`              |

---

## 🧠 Buenas prácticas

1. Usar `Zustand` para estados globales simples (ej. localidad seleccionada).
2. Contexts para lógica compleja con múltiples interacciones.
3. Crear componentes reutilizables en `/components`.
4. No repetir lógica: si algo se repite, conviértelo en un hook o utilidad.
5. Documentar los types en `/types` o directamente al lado de su uso.
6. Usar siempre funciones puras en `utils`.

---

## ✨ Futuras funcionalidades

- [ ] Autenticación con Google (Firebase)
- [ ] Formulario para que los comercios se registren
- [ ] Dashboard para comercios
- [ ] Integración con Firestore
- [ ] Panel de administración con métricas de visitas

---

## 📚 Recursos útiles

- 🔗 [React](https://react.dev)
- 🔗 [Vite](https://vitejs.dev/)
- 🔗 [TypeScript](https://www.typescriptlang.org/)
- 🔗 [Material UI](https://mui.com/)
- 🔗 [Zustand](https://github.com/pmndrs/zustand)
- 🔗 [React Hook Form](https://react-hook-form.com/)
- 🔗 [TanStack Query](https://tanstack.com/query/latest)
- 🔗 [ESLint](https://eslint.org/)
- 🔗 [Prettier](https://prettier.io/)
- 🔗 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

---

¡Gracias por contribuir al proyecto _Qué Hacer_! Si tenés dudas, contactá al equipo de desarrollo 💬

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
