# 🚀 Proyecto React con Vite y TypeScript

El proyecto utiliza Vite como bundler y TypeScript para el desarrollo Front-End.

## 🏗️ Estructura del Proyecto

### 📁 Nomenclaturas

- **Carpetas**: kebab-case → `/processed-batches`
- **Componentes**: PascalCase → `ModalConfirm.tsx`
- **Hooks/funciones**: camelCase → `useResponsive.ts`
- **Rutas**: kebab-case → `/user-profile`
- **Constantes**: SCREAMING_SNAKE_CASE → `API_URL`

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
