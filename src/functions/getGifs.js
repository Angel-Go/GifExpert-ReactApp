export const getGifs = (category) => {

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
