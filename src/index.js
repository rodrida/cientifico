// console.log('Hello');

import router from './routes';

// hacemos uso del objeto que está disponible en el navegador, Window
// utilizamos el manejador de eventos (addEventListener) para saber si la carga de la página ha sucedido
// el primer parámetro hace referencia a que va a estar escuchando, 
// y el segundo parámetro es la función que se ejecutará cuando el primer parámetro presente un cambio
// está es la lógica para cuando carga por primera vez nuestra página
window.addEventListener('load', router);
// está es la lógica para cuando hay un cambio dentro de un hash
window.addEventListener('hashchange', router);