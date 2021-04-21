// creamos la función que nos va a retornar la vista que necesitamos

import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const id = getHash();
    const character = await getData(id);

    // definimos la vista del personaje con su respectiva descripción
    // con la etiqueta <article> establecemos la imagen con el nombre del personaje y los detalles del mismo
    // con la etiqueta <span> que es una etiqueta para mostrar texto, actualizamos los elementos <h3>
    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="Characters-card">
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: <span>${character.origin.name}</span></h3>
                <h3>Last Location: ${character.location.name}</h3>
            </article>
        </div>
    `;
    // NOTA: Muy importante retornar está vista.
    return view;
}

// exportamos está función Character para poderla utilizar en otro ú otros archivos js
export default Character;