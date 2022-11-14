# API-MongoDB

Actividad: Diseño de API con base de datos MongoDB

Objetivos

A través de esta actividad vamos a poder establecer los principios básicos de una arquitectura de aplicación compleja para una aplicación generada a partir del framework Express. Además, nos va a ayudar a entender cómo podemos trabajar con los diferentes métodos y acciones disponibles dentro de una base de datos generada a partir de MongoDB.

Es importante conocer qué ficheros y directorios nos van a servir para afrontar de la manera óptima el desarrollo de aplicaciones complejas en las cuales incluyamos interacciones dinámicas. Cuando definimos diferentes urls y diferentes manejadores para dichas urls debemos establecer patrones de trabajo para todos ellos y así poder centrarnos más en qué hace cada manejador y no en cómo lo hace.

Pautas de elaboración

En esta actividad vamos a generar una aplicación con ExpressJS que nos permita realizar todas las acciones básicas (CRUD) sobre el grupo de datos que conforman los inmuebles de una finca.

Para ello debemos contar con la conexión a una base de datos MongoDB dentro de nuestro ordenador para poder acceder a ella de manera local.




El proyecto debe cumplir con las siguientes pautas:

-	Debemos generar un modelo para cada uno de los inmuebles, con los siguientes datos: piso, letra, extensión (m2), número de habitaciones, alquilado (sí/no), nombre propietario, mail de contacto.

-	Dentro de dicho modelo se debe establecer el nombre que tendrá la colección dentro de la base de datos. Para las acciones relacionadas con el modelo debemos usar la librería Mongoose.

-	Debemos generar las rutas necesarias para poder crear, borrar, listar y actualizar elementos del modelo anterior tomando como base la url/api/inmuebles.

-	Nuestro api debe seguir una serie de buenas prácticas que nos permitan en un futuro poder ampliar sin excesivos problemas la funcionalidad de nuestra aplicación.

-	Se debe además comprobar cualquier tipo de error que suceda relativo a la interacción con la base de datos en cualquiera de las acciones llevadas a cabo.


###

INSTRUCCIONES API 

Obtener todos los inmuebles:
GET http://localhost:3000/api/inmuebles

Devuelve un JSON con todos los inmuebles.

Crear un inmueble nuevo:
POST http://localhost:3000/api/inmuebles
Content-Type: application/json

{
    "piso": "1º",
    "letra": "B",
    "extensión": "67 m2",
    "numHabitaciones": 2,
    "alquilado": false,
    "nombrePropietario": "Pepito Palotes",
    "mail": "pepa@gmail.com"
}

Devuelve un objeto con el inmueble creado.

Modificar un inmueble:
PUT http://localhost:3000/api/inmuebles/(idInmueble)
Content-Type: application/json

{
    "piso": "3º",
    "letra": "A",
    "extensión": "69m2",
    "numHabitaciones": 2,
    "alquilado": true,
    "nombrePropietario": "Pepito P",
    "mail": "pepa@gmail.com"
}

Devuelve un objeto con el inmueble modificado.

Eliminar un inmueble:
DELETE http://localhost:3000/api/inmuebles/(IdInmueble)

Devuelve un objeto con el inmueble eliminado.


