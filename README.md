# DESCRIPCIÓN  

La presente página web tiene dos enfoques

La del usuario:
    
    -Con un Log in puede ver sus datos y los préstamos que le han hecho
    -Puede pedir prestado un libro

La del Administrador:
    
    -Se accede iniciando sesión con: Correo electrónico: camejo@gmail.com, contraseña: vaca

    -Puede ver todos los libros
    -Puede ver todos los usuarios
    -Puede borrar libros

## Pasos para levantar el repo 

### Desde la carpeta del back, ejecutar:
    
1) Hacer un .env con las variables de entorno 
|||de la base de datos

2) docker compose up -d para la base de datos


3) npx prisma migrate deploy

4) npm run start o npm run dev para levantar el servidor

5) ejecutar npm run dev

