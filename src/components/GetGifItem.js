import React from 'react';

export const GetGifItem = ({ id, title, url }) => {

    return (
        <li className="listaGif">
            <div className="listaGif-content animate__animated animate__fadeInUp">
                <img src={url} alt={title}></img>
                <h3>{title}</h3>
            </div>
        </li>
    )
}
