# cajero

Importación de la Base de Datos

Para levantar el proyecto en otro entorno, se debe importar la base de datos desde el archivo SQL proporcionado (cajero.sql).
1. Usando phpMyAdmin

Abrir phpMyAdmin en el navegador:

http://localhost/phpmyadmin


Crear una base de datos nueva llamada cajero si no existe.

Seleccionar la base de datos cajero en el panel lateral.

Ir a la pestaña Importar.

Hacer clic en Elegir archivo y seleccionar cajero.sql.

Asegurarse de que el formato seleccionado sea SQL.

Hacer clic en Continuar.

Esto creará todas las tablas y cargará los datos del proyecto en la base de datos cajero.




---

# 💵 Cajero Automático Inteligente

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.5.5-brightgreen)
![React](https://img.shields.io/badge/React-Vite%2BTS-blue)
![Lucide](https://img.shields.io/badge/Lucide-Icons-purple)
![MySQL](https://img.shields.io/badge/MySQL-Clever--Cloud-lightgrey)
![Maven](https://img.shields.io/badge/Maven-3.9+-red)

Este proyecto es una simulación de un **cajero automático inteligente**, desarrollado como parte de un reto de programación.
Incluye un **backend en Spring Boot (Java, Maven)** y un **frontend en React con Vite + TypeScript + Lucide Icons**, con persistencia en **MySQL desplegado en Clever Cloud**.

---

## 📂 Estructura del proyecto

```
.
├── front/
│   └── cajero/   # Aplicación frontend en React + Vite + TypeScript + Lucide Icons
├── backend/
│   └── cajero/   # Aplicación backend en Spring Boot
```

---

## 🚀 Requisitos previos

Asegúrate de tener instalado en tu máquina:

* [Java 17+](https://adoptium.net/)
* [Maven 3.9+](https://maven.apache.org/)
* [Node.js 18+ y npm](https://nodejs.org/)
* [MySQL (opcional si deseas correrlo en local)](https://dev.mysql.com/downloads/)

---

## ⚙️ Configuración de la base de datos

El proyecto está configurado para conectarse a **MySQL **.

> ⚠️ Si quieres correr MySQL en local, crea la base de datos con el mismo nombre y arriba te deje para que importaras la base de datos.

---

## ▶️ Ejecución del Backend

1. Ir al directorio del backend:

   ```bash
   cd back/cajero
   ```
2. Compilar y ejecutar con Maven:

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
3. El backend quedará disponible en:

   ```
   http://localhost:8080
   ```

---

## 💻 Ejecución del Frontend

1. Ir al directorio del frontend:

   ```bash
   cd front/cajero
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Iniciar la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```
4. El frontend quedará disponible (por defecto) en:

   ```
   http://localhost:5173
   ```

---

## 🌐 Flujo de uso

1. Inicia el **backend** en `http://localhost:8080`.
2. Levanta el **frontend** en `http://localhost:5173`.
3. Ingresa al frontend para interactuar con el cajero (retiros, consulta de billetes, etc).

---


## ✅ Criterios cumplidos

* ✔️ Retiro de efectivo con combinación mínima de billetes.
* ✔️ Actualización del estado del cajero tras cada retiro.
* ✔️ Persistencia en MySQL.
* ✔️ Frontend en React + Vite + TypeScript + Lucide Icons.
* ✔️ Documentación clara (este README).
