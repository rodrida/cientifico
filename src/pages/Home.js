// creamos la función que nos va a retornar la vista que necesitamos

import getData from '../utils/getData';
import getHash from '../utils/getHash'

// Nota: En este archivo llamamos a la función async getData, que hace el llamado a la API, por lo tanto, 
// la función Home debemos convertirla a una función async.

const Home = async () => {
    // hacemos el llamado a la función async getData y por ser el Home no le pasamos ningún id, es decir,
    // obtiene todos los personajes de la API
    const page = await getHash();
    const characters = await getData(page);
    // dentro de nuestra vista escribimos el código que nos permite obtener los datos en específico
    // que necesitamos de la API, haciendo uso del objeto iterable en formato JSON que se obtiene
    // finalmente utilizamos la función join para generar un bloque, es decir, unir el array que obtenemos
    // y que no utilice ninguna forma de separarlo

    // definimos la vista de todos los personajes que vamos a presentar
    // la etiqueta <article> me permite establecer que aquí viene cada personaje
    // la etiqueta <a> me va a permitir generar un enlace hacia alguna sección en particular, en este caso,
    // hacia el detalle de este personaje
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
            `).join('')}
        </div>
    `;
    // NOTA: Muy importante retornar está vista.
    return view;
}

// exportamos está función Home para poderla utilizar en otro ú otros archivos js
export default Home;