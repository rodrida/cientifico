// aquí importamos los templates y páginas que creamos, generamos el manejo de rutas para hacer el render
// en nuestra aplicación

// NOTA: Una buena práctica es omitir la extensión del archivo que estamos importando.

import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// creamos las rutas de nuestra aplicación
const routes = {
    // la raíz ó Home, que hará render de la función Home
    '/': Home,
    // :id indica que el id es un valor dinámico, que hará render de la función Character
    '/:id': Character,
    '/contact': 'Contact'
}

// creamos el manejador de las rutas, router, que se encargará de mostrar los elementos según la lógica 
// que vamos a establecer
// router es una función async, por lo tanto, espera a que la función Header, resolveRoutes y render sucedan
const router = async () => {
    // empezamos a estructurar los elementos HTML del archivo index.html de la carpeta public
    // sobre las etiquetas header y section vamos a hacer el llamado para empujar ciertos elementos, es decir,
    // haremos el render de nuestros templates hacia estas etiquetas
    // le pasamos un null en dado caso que no lo encuentre ó del documento obtiene el elemento por id="header"
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    // mandamos el template Header a esta etiqueta cuyo valor de id="header"
    header.innerHTML = await Header();

    // añadimos la lógica de getHash y resolveRoutes
    let hash = getHash();
    let route = await resolveRoutes(hash);

    // generamos la variable render, la cuál va contener el valor de las rutas que establecimos (routes),
    // comparada sobre la que estamos obteniendo de la navegación del usuario
    // routes es la estructura de nuestras rutas y route es la que obtenemos del usuario
    // hacemos una validación con un if ternario, sí me retorna un elemento, entonces lo muestro, 
    // en caso contrario, la ruta no existe y mando el Error404
    let render = routes[route] ? routes[route] : Error404;
    // sí existe la ruta, tengo que actualizar ó hacer render de la constante content
    content.innerHTML = await render();
}

// exportamos está función router para poderla utilizar en otro ú otros archivos js
export default router;