// creamos la función que nos va a retornar la vista que necesitamos

// NOTA: Error 404 tiene que ver con los errores de HTTP, que son los llamados ó peticiones a servidores.

const Error404 = () => {
    // definimos la vista del Error 404
    const view = `
        <div class="Error404">
            <h2>Error 404</h2>
        </div>
    `;
    // NOTA: Muy importante retornar está vista.
    return view;
}

// exportamos está función Error404 para poderla utilizar en otro ú otros archivos js
export default Error404;