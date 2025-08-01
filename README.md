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
