import { useEffect, useState } from 'react'
import { getGifs } from '../functions/getGifs';

export const useFetchGifs = (category) => {

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
