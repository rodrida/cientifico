// creamos la función que nos permite saber cuál es la ruta a la cuál está accediendido nuestro usuario

// de location obtengo el hash, a ese hash le eliminó el primer elemento (#) con slice, quiero garantizar
// que el contenido sea en minúsculas usando toLocaleLowerCase, de ese string que tenemos lo convertimos
// a un array usando split y que elimine los slash (/), del array resultante, accedemos al elemento en la
// posición [1] que es el id, y en dado caso que no encuentre ningúna ruta a la cuál se está accediendo,
// utilizamos el operador or (||) para decirle que estamos en la raíz (/), es decir, no se está navegando 
// sobre alguna sección
const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';  // ['', '1', '']

// exportamos está función getHash para poderla utilizar en otro ú otros archivos js
export default getHash;