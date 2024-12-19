# Cambios importantes

Pasé todo a una carpeta "back" con la intención de que todo quedara más prolijo. 
Tuve que eliminar el antiguo contenedor de docker y volver a correr comandos 
como npx prisma migrate dev

## Pasos a seguir 

Seguramente tendrán que correr unos comandos en local que detallo a continuación:

1) borrar el antiguo contenedor de docker con "docker rm <id_del_contenedor>"

2) terminar el antiguo proceso de node con "pkill node". 
Si no funciona, una alternativa está acá 
https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-how-can-i-stop-the-process

3) Levantar el contenedor desde la carpeta back

4) Ejecutar npx migrate dev

5) ejecutar npm run dev

Si no estoy equivocado, con todo eso ya les deberia funcionar. Pruebenlo y me avisan.



# 🐳🐳 Dockerizar un Backend 🐳🐳

## Construir la imagen Docker

1. **Situarse en la carpeta del `Dockerfile`**
   Asegúrate de estar en el directorio donde se encuentra el archivo `Dockerfile`.

2. **Construir la imagen Docker**:
   ```bash
   docker build -t my-app .
   ```

3. **Verificar la imagen creada**:
   Lista las imágenes disponibles en tu máquina para confirmar que la imagen fue creada correctamente:
   ```bash
   docker images
   ```

---

## Levantar la aplicación con Docker Compose

1. **Asegúrate de tener un archivo `docker-compose.yml` configurado**:
   Este archivo define los servicios necesarios (como la aplicación y la base de datos) y sus configuraciones.

2. **Construir y levantar los contenedores**:
   Ejecuta el siguiente comando para construir las imágenes y levantar los servicios:
   ```bash
   docker-compose up --build
   ```

3. **Verificar los contenedores en ejecución**:
   Lista los contenedores en ejecución para asegurarte de que todo está funcionando correctamente:
   ```bash
   docker-compose ps
   ```

---

## Migrar la base de datos con Prisma

1. **Acceder al contenedor de la aplicación**:
   Ejecuta el siguiente comando para abrir una terminal dentro del contenedor del backend:
   ```bash
   docker-compose exec back sh
   ```

2. **Aplicar las migraciones de Prisma**:
   Dentro del contenedor, ejecuta:
   ```bash
   npx prisma migrate dev
   ```

---

## Notas adicionales
- Si necesitas detener los contenedores, utiliza:
  ```bash
  docker-compose down
  ```
- Para eliminar los datos persistidos (volúmenes), añade la opción `-v`:
  ```bash
  docker-compose down -v
  ```





