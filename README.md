#Cambios importantes

Pasé todo a una carpeta "back" con la intención de que todo quedara más prolijo. 
Tuve que eliminar el antiguo contenedor de docker y volver a correr comandos 
como npx prisma migrate dev

##Pasos a seguir 

Seguramente tendrán que correr unos comandos en local que detallo a continuación:

1) borrar el antiguo contenedor de docker con "docker rm <id del contenedor>"

2) terminar el antiguo proceso de node con pkill "node". 
Si no funciona, una alternativa está acá 
https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-how-can-i-stop-the-process

3) Levantar el contenedor desde la carpeta back

4) Ejecutar npx migrate dev

5) ejecutar npm run dev

Si no estoy equivocado, con todo eso ya les deberia funcionar. Pruebenlo y me avisan.
