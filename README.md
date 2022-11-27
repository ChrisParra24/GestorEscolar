## API para Gestor Escolar

### Proyecto de Aplicaciones Web - Otoño 2022

Para poder llevar a cabo el desarrollo de la API, se ocupara
Express para la parte del servidor y como gestor de base de datos
se ocupara PostgreSQL, por lo que se necesita de un paquete que nos ayude
a tener la conexión entre el servidor y nuestra BD.

El paquete a ocupar de para conectar la BD y NodeJs será **pg**

### Iniziar la Base de datos

La API depende de la base de datos PostgreSQL que está construida dobre docker. El puerto de escucha de la base de datos es **6543**

~~~
docker compose -f ./Docker_DataBase/docker-compose.yml run -d
~~~

Despues se tiene que acceder por medio de algun gestor de base de datos (pgadmin, tableplus...) con las credenciales:

USER 

```LosReactivos
LosReactivos
```

PASSWORD

```
DBEscuela12!#
```

Luego, cargar el script **Docker_DataBase/Escuela.sql** para que este genere la base de datos *DB_Escuela* junto con todas sus tablas


> [!] Si no se carga el script y se ejecuta el API Node, este generará una excepción de no encontró base de datos.``


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
