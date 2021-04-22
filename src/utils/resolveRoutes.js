// creamos la función que dependiendo de la ruta que se obtiene de la navegación del usuario, 
// saber a cuál template lo voy a mandar, si al Home ó a la sección de rutas ó si no lo encuentro, mandarlo
// al Error404

// la función resolveRoutes recibe como parámetro la ruta que se obtiene del usuario (hash)
const resolveRoutes = (route) => {
    // establecemos la lógica para el manejo de está ruta
    // la API tiene menos de 1000 personajes, por lo tanto, la longitud del id es de 3
    // sí la ruta tiene una longitud menor ó igual a 3, entonces es parte del Home ó de algún id
    if (route.length <= 3) {
        // usando un if ternario, hacemos la validación si es Home ó algún id
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    // en dado caso de no entrar al if, continua nuestro programa y retornamos la ruta que recibimos
    // para compararla con nuestra sección de rutas
    return `/${route}`;  // /about
}

// exportamos está función resolveRoutes para poderla utilizar en otro ú otros archivos js
export default resolveRoutes;