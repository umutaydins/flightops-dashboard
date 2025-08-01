# FlightOps – Maintenance Tasks Dashboard

A lightweight **React + TypeScript** dashboard for managing aircraft maintenance tasks.  
It showcases **CRUD**, **search & filtering**, **responsive UI (Bootstrap)**, and a **mock REST API** powered by `json-server`.

> Built for interview readiness: small, clean, and production-minded.

---

 Features

- Task **list, search, filter, sort**
- **Create / Edit / Delete** tasks (form validation included)
- **Responsive** layout (Bootstrap grid & utilities)
- **Routing**: Dashboard / Tasks / Task Detail
- Service layer with **Axios** (error/loading handling)
- Minimal **unit tests** (React Testing Library) _(optional)_

---

 Tech Stack

- **React 18** + **TypeScript**
- **Vite** (fast dev server & build)
- **Bootstrap** for styling
- **Axios** for HTTP
- **React Router** for navigation
- **json-server** for mock REST
- **ESLint + Prettier** for code quality

---

Quick Start
bash
# 1) Install
npm i

# 2) Run mock API (port 4000)
npm run api

# 3) Start the app (port 5173)
npm run dev
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> ef0abf6 (chore: init React+TS with Bootstrap, axios, router, json-server)
