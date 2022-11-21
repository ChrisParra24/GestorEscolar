## API para Gestor Escolar
### Proyecto de Aplicaciones Web - Otoño 2022

Para poder llevar a cabo el desarrollo de la API, se ocupara
Express para la parte del servidor y como gestor de base de datos
se ocupara PostgreSQL, por lo que se necesita de un paquete que nos ayude
a tener la conexión entre el servidor y nuestra BD.

El paquete a ocupar de para conectar la BD y NodeJs será **pg** 

### Instalación de paquetes
Debido a que el archivo package.json esta en el repositorio bastará el siguiente comando

~~~
npm install
~~~

Una vez que se tengan instalados los paquetes se puede comenzar a trabajar con la **API**

### Levantamiento del servidor
Para poder levantar el servidor solo se necesita que se corra el siguiente comando

~~~
npm run start
~~~

Una vez que se levante el servidor, se pueden seguir haciendo cambios y no es necesario apagar el
servidor, ya que la herramienta nodemon, nos permite trabajar y ver los cambios reflejados.