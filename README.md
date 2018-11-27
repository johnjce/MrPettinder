# MrPettinder

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

### Tech

MrPettinder uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [jQuery] - duh

And of course MrPettinder itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

para bajar la app:
en consola,
```sh
git clone https://github.com/johnjce/appV9.git
```

Para instalar ionic:
en consola, 
```sh
npm install -g ionic
```
Para instalar la app:
en consola,
```sh
cd appV9
npm install
```

Para lanzar la app en navegador:
en consola,
```sh
ionic serve
```

### Todos
Estructura de ficheros en la app
* src
	* app								->define la app
		* app.componet.ts            	->donde se define el punto de partida de la app (no tocar si no es completamente necesario)
		* app.html					->(no se toca)
		* app.module.ts               ->(donde se definen todos los componentes, providers, y pages de la app)
		* app.scss                    ->donde se definen los estilos globales
		* main.ts                     ->main para arrancar bootstrap(no tocar)
		* order-by-pipe.ts            ->donde se ordenan los resultados de las listas (no tocar)
	* assets                          ->imagenes, iconos, extras que se quieran guardar
	* pages                           ->donde se definen las paginas que se van a mostrar
		* forumPages                  ->todas las paginas relacionadas con foros
		* shopPages                   ->todas las paginas relacionadas con la * tienda
			* add-new                 ->pagina con formulario para agregar productos
				* add-new.ts          ->donde se trabaja la logica y se llaman a los providers
				* add-new.scss        ->donde se definen los estilos
				* add-new.html        ->donde se maqueta la pagina
			* orders                  ->pagina pendiente de revision( algo nos *interesaba, no recuerdo el que)
			* product-details         ->pagina donde se ve la descripcion completa del producto(donde va el carrito)
			* producs                 ->pagina con el listado de productos
		* tabs                        ->pagina de pestañas, controla la navegación
		* userPages                   ->todas las paginas relacionadas con usuarios
		* vetPages                    ->todas las paginas relacionadas con veterinarios
	* providers                       ->donde se definen todas las llamadas a el backend
		* apiurl                      ->donde se define la url del backend
			* .ts                     ->se sirve a todos los metodos la autorizacion (key que se pone en headers)
		* subforums                   ->donde se hacen las peticiones al backend 
			* .ts                     -> se definen las funciones de subforos
		* user                        ->donde se hacen las peticiones al backend 
			* .ts                     -> se definen las funciones de usuarios
	* etc

License
----
Pending



[//]: # (urls)

   [dill]: <https://github.com/johnjce/appV9>
   [git-repo-url]: <https://github.com/johnjce/appV9.git>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
