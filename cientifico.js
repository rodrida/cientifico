// Pasos de la realización del proyecto y la ejecución de comandos en la terminal.

// Primero tenemos que revisar las capturas de pantalla que se encuentran en la carpeta de este curso

// ejecutamos en la terminal: npm install @babel/core babel-loader html-webpack-plugin webpack-cli webpack-dev-server --save-dev
// creamos el archivo: webpack.config.js
// sobre ese archivo establecemos toda la configuración de Webpack

// creamos el archivo .gitignore e ignoramos la carpeta node_modules

// creamos los scripts build (modo producción) y start (modo desarrollo) en el archivo package.json
// para probar que todo funciona hasta este momento, escribimos un console.log('Hello'); en el archivo index.js
// así como escribir la estructura base del HTML en el archivo index.html

// ejecutamos en la terminal: npm run build
// obtenemos la carpeta dist con nuestros archivos en código resultante (código optimizado)

// en la carpeta pages creamos un archivo llamado Home.js
// escribimos su respectivo código

// dentro de la carpeta src, vamos a crear la carpeta templates, donde van a vivir los templates que necesitemos,
// son secciones que no son una página pero que son parte de las páginas
// creamos el archivo Header.js

// en la carpeta pages creamos el archivo Character.js
// escribimos su respectivo código

// un buena práctica es crear nuestro template de error 404, esto nos garantiza que cuando algo no este
// sucediendo dentro de nuestra aplicación, podamos mostrar esta pantalla
// en la carpeta pages creamos el archivo Error404.js

// para visualizar los cambios en tiempo real y utilizar el entorno de desarrollo local,
// ejecutamos en la terminal: npm run start

// en la carpeta routes creamos el archivo index.js
// escribimos su respectivo código

// necesitamos manipular y actualizar nuestro archivo index.js de la carpeta src
// importamos la función router para crear un elemento que va a estar escuchando cuando la página
// ya este lista, entonces empujar la ruta que nosotros estamos llamando

// en la carpeta utils creamos el archivo getHash.js
// escribimos su respectivo código

// en la carpeta utils creamos el archivo resolveRoutes.js
// escribimos su respectivo código

// nos vamos al archivo index.js de la carpeta routes para hacer el import de los archivos 
// getHash.js y resolveRoutes.js
// así mismo generar lo lógica que necesitamos

// nos vamos al archivo index.js de la carpeta src
// creamos un nuevo addEventListener que se va a encargar de escuchar las rutas, en este caso,
// el hash al cuál el usuario se está moviendo

// en la carpeta utils creamos el archivo getData.js
// para obtener los datos de la API
// escribimos su respectivo código

// nos vamos al archivo Home.js de la carpeta pages para hacer el import del archivo getData.js
// así mismo generar lo lógica que necesitamos

// nos vamos al archivo Character.js de la carpeta pages para hacer el render de los detalles del personaje
// para eso hacemos el import de los archivos getHash.js y getData.js
// así mismo generar lo lógica que necesitamos

// agregamos los estilos para mejorar el aspecto visual de nuestra aplicación
// la estructura del archivo de estilos se encuentra en un repositorio de GitHub, damos click a Raw
// y copiamos todo el contenido en un archivo llamado styles.css en la carpeta styles

// ahora preparamos el archivo de configuración de Webpack para que pueda trabajar con estos estilos
// ejecutamos en la terminal: npm install copy-webpack-plugin --save-dev
// agregamos está configuración al archivo de Webpack y agregamos el link de referencia 
// al archivo de styles.css en index.html de la carpeta public

// ejecutamos en la terminal: npm run build
// una vez que el compilado de nuestro proyecto es exitoso
// ejecutamos en la terminal: npm run start

// utilizamos la herramienta Travis CI, nos permite generar un script que va a estar conectado a nuestra
// aplicación y a nuestro repositorio para que podamos generar integración continua, es decir, que cuando
// detecte un cambio sobre la rama master, pueda generar un compilado en un servidor en la nube y mandar
// estos cambios hacia el repositorio que va a utilizar GitHub Pages para poder publicar la aplicación,
// y los cambios que hagamos al código de manera automática

// debemos mandar nuestra aplicación a un repositorio en GitHub

// nos registramos en Travis CI con nuestra cuenta de GitHub e iniciamos sesión en Travis CI
// empezamos generando la conexión, utilizamos un token que creamos dentro de GitHub
// en GitHub vamos a la sección de Settings, damos click en Developer settings, 
// click en Personal access tokens, click en Generate new token, este token lo llamamos travis-spa,
// seleccionamos repo, admin:repo_hook y click en Generate token
// copiamos el token que nos genera, en travis CI nos vamos a Settings, click en Sync account, para que
// pueda leer los repositorios sobre los que estoy trabajando, buscamos el repositorio de nuestra aplicación,
// click en Settings, click en More options, click en Settings, en variables de entorno establecemos,
// GITHUB_TOKEN y el valor del token que generamos en GitHub, click en Add

// ahora generamos el script en nuestra aplicación, creamos en la raíz del proyecto el archivo .travis.yml
// construimos el script que me va a permitir automatizar el proceso de enviar a producción nuestro proyecto
// mandamos este archivo al repositorio en GitHub

// en Travis CI nos vamos a Settings, buscamos el repositorio de nuestra aplicación,
// click en toggle para habilitarlo, es decir, ya podemos verlo en el Dashboard, click en More options,
// click en Trigger build, click en Trigger custom build