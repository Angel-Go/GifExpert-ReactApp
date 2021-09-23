import PropTypes from 'prop-types';

import { GetGifItem } from './GetGifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const ShowGifGrid = ({ category }) => {

    const {data:gifs, loading} = useFetchGifs(category);

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