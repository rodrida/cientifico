// creamos la función que nos va a retornar la vista que necesitamos

const Header = () => {
    // definimos la vista del header
    // definimos 3 secciones con la etiqueta <div>, con el atributo class establecemos el nombre 
    // de las clases de estas 3 secciones
    // la etiqueta <a> me permite la navegación entre estas 3 secciones
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="#">
                    100tifi.co
                </h1>
            </div>
            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;
    // NOTA: Muy importante retornar está vista.
    return view;
}

// exportamos está función Header para poderla utilizar en otro ú otros archivos js
export default Header;