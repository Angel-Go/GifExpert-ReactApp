export const getGifs = (category) => {

    /*
    Esta funcion hace una peticion asincrona a la API de Giphy mandandole la categoria y el numero de
    resultados que espera recibir (8) y retorna una promesa con un objeto que contiene el id, titulo y url
    de la data regresada por la API mencionada.
    */

    const apiKey = 'rV8bYTQ31V0v1VT0Te3cLj3nuf7Kymb9';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=8`;

    return fetch(url)
        .then(respuesta => respuesta.json())
        .then(({ data }) => data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            } 
        }))
};

// FUNCION EQUIVALENTE A LA DE ARRIBA, PERO UTILIZANDO async y await

/*
export const getGifs = async(category) => {

    const apiKey = 'rV8bYTQ31V0v1VT0Te3cLj3nuf7Kymb9';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=8`;

    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
};*/
