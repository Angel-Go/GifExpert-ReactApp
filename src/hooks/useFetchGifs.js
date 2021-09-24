import { useEffect, useState } from 'react'
import { getGifs } from '../functions/getGifs';

export const useFetchGifs = (category) => {

    /*
    Este hook recibe una categoria, crea una variable (objeto) con estado "images" y luego
    mediante la funcion "getGifs" (que hace una peticion a la API Giphy) obtiene un objeto que 
    contiene el id, titulo y url de un GIF. Los valores obtenidos son  añadidos a la variable
    "images" dentro del elemento "data" al mismo tiempo que cambia el valor del elemento loading
    a false.
    Finalmente el objeto "images" es retornado con sus nuevos valores
    */

    const [images, setImages] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        setTimeout(() => {
            getGifs(category)
                .then(gifs => {
                    setImages({
                        data: gifs,
                        loading: false
                    })
                })
        }, 1000);

    }, [category]);

    return images;

}
