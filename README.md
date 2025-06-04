
---

# `ParcialFinalBack/README.md`

# Parcial Final - Backend API

[![GitHub license](https://img.shields.io/github/license/stevenbisbi/ParcialFinalBack)](https://github.com/stevenbisbi/ParcialFinalBack/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/stevenbisbi/ParcialFinalBack)](https://github.com/stevenbisbi/ParcialFinalBack/issues)

API REST para gestión de usuarios y roles (Parcial Final)

## 🌐 Características
- CRUD completo para usuarios y roles
- Validación de datos
- Manejo centralizado de errores
- Sistema de rutas modularizado
- Persistencia en memoria (o la que uses)
- Soporte para CORS

## 💻 Tecnologías
- Node.js
- Express
- TypeScript
- Cors
- Dotenv (para variables de entorno)

## 🚀 Instalación

1. Clonar repositorio:
```
git clone https://github.com/stevenbisbi/ParcialFinalBack.git
```
Instalación
```
git clone https://github.com/stevenbisbi/ParcialFinalBack.git
cd ParcialFinalBack
npm install
npm start
```
Estructura de endpoints
```
GET    /api/roles      - Listar todos los roles
POST   /api/roles      - Crear nuevo rol
GET    /api/users      - Listar todos los usuarios
POST   /api/users      - Crear nuevo usuario
```
`


Configuración conjunta
Para ejecutar ambos proyectos simultáneamente:

Iniciar el backend en el puerto 3001

Iniciar el frontend en el puerto 3000

Acceder a http://localhost:3000

Licencia
MIT
