// creamos la lógca que necesitamos para obtener los datos de la API

const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    // hacemos una validación con un if ternario, sí el id existe, entonces a la URL de la API le
    // concatenamos el id, en caso contrario, es la URL de la API y trae a todos los personajes 
    // para hacer render del Home
    const apiURL = id ? `${API}${id}` : API;

    // hacemos el llamado al Fetch de estos elementos, pero utilizando las buenas prácticas, en este caso,
    // todo el llamado se hace dentro de una estructura try...catch
    try {
        // establecemos y esperamos el llamado con la función fetch a nuestra API
        const response = await fetch(apiURL);
        // la respuesta de la API la transformamos a JSON
        const data = await response.json();
        // retornamos los datos
        return data;
    } catch (error) {
        // imprimo por consola el error que se obtenga
        console.log('Fetch error', error);
    }
}

// exportamos está función async getData para poderla utilizar en otro ú otros archivos js
export default getData;