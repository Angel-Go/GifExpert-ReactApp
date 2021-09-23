import React, { useState } from 'react';

import AddNewCategory from './components/AddNewCategory';
import { ShowGifGrid } from './components/ShowGifGrid';


// Este FuntionalComponent es el principal de la aplicación, la cual esta mandando llamar el
// componente AddNewCategory (al cual le envia la funcion setCategories dentro de las props)
// el cual se encarga de procesar los datos ingresados en el input para agregarlos a "categories"
// las cuales se muestran en el browser enlistados.

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shingeki no Kiojin']);

    return (
        <div>
            <h1>GifExpertApp</h1>
            <p style={{color: '#61DBFB'}}>Bucador de Gifs</p>
            <AddNewCategory setCategories={setCategories} />
            <hr></hr>
            <ul className="list-category-grid">
                {/* El metodo .map() recorre el arreglo "categories" y simplemente retorna
                el valor de cada elemento dentro de una etiqueta de lista */}
                
                {
                    categories.map(category =>
                        <ShowGifGrid key={category} category={category}/>
                    )
                }
            </ul>
        </div>
    );

};

export default GifExpertApp;
