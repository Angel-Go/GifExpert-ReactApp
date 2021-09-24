import PropTypes from 'prop-types';

import { GetGifItem } from './GetGifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const ShowGifGrid = ({ category }) => {

    /*
    Se crean dos variables ("gifs" que contiene un arreglo de objetos con el id, title y url de un GIF
    Y "loading" que tiene un valor boleano) a partir de una desestructuracion del objeto retornado
    por el hook "useFetchGifs"
    */
    const {data:gifs, loading} = useFetchGifs(category);

    /*
    Mediante el funtional component "GetGifItem" se añade al componente retornado un elemento lista con
    el GIF y su titulo de la categoria recibida. Mediante gifs.map se van agregando todos los gif con su titulo
    dentro de la lista <ul>
    */

    return (
        <>
            <h2 className="animate__animated animate__pulse">{category}</h2>
            {loading ? 'Loading...' : null}
            <ul className="list-items-grid">
                {
                    gifs.map(gif =>
                        <GetGifItem
                            key={gif.id}
                            id={gif.id}
                            title={gif.title}
                            url={gif.url}
                        />
                    )
                }
            </ul>
        </>
    )
}

ShowGifGrid.protoTypes = {
    category: PropTypes.string.isRequired
}