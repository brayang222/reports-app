# Reports App

Este es un proyecto [Next.js](https://nextjs.org) con autenticación, Prisma y PostgreSQL.

## 🚀 Despliegue

El proyecto está desplegado en Vercel:  
[https://reports-app-eta.vercel.app/](https://reports-app-eta.vercel.app/)

## 🛠️ Requisitos

- Node.js 18+ o [Bun](https://bun.sh/) (recomendado)
- PostgreSQL (puedes usar Supabase, Railway, etc.)
- Variables de entorno configuradas (`.env`)

## ⚡ Instalación y ejecución local

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/brayang222/reports-app.git
   cd reports-app
   ```

2. **Instala las dependencias:**  
   Si usas **Bun**:

   ```bash
   bun install
   ```

   O si prefieres npm/yarn:

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura las variables de entorno:**  
   Copia el archivo `.env.example` a `.env` y completa tus credenciales de base de datos y autenticación.

4. **Ejecuta las migraciones de la base de datos:**

   ```bash
   npx prisma migrate dev
   ```

5. **Inicia el servidor de desarrollo:**  
   Con **Bun**:

   ```bash
   bun run dev
   ```

   O con npm/yarn:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

6. **Abre la app en tu navegador:**  
   [http://localhost:3000](http://localhost:3000)

## 📦 Despliegue en Vercel

1. Sube tu repositorio a GitHub.
2. Ve a [https://vercel.com/new](https://vercel.com/new) y conecta tu repositorio.
3. Configura las variables de entorno en Vercel (igual que en `.env`).
4. Haz deploy.

## 📚 Recursos útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Prisma](https://www.prisma.io/docs/)
- [Vercel](https://vercel.com/)
- [Bun](https://bun.sh/)

---
