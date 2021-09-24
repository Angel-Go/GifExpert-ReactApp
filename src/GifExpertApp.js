import React, { useState } from 'react';

import AddNewCategory from './components/AddNewCategory';
import { ShowGifGrid } from './components/ShowGifGrid';


// Este FuntionalComponent es el principal de la aplicación, la cual esta mandando llamar el
// componente AddNewCategory (enviando la funcion setCategories dentro de las props)
// que se encarga de procesar los datos ingresados en el input para agregarlos a "categories"
// las cuales se muestran en el browser enlistados.

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <div>
            <h1>GifExpertApp</h1>
            <p style={{color: '#61DBFB'}}>Bucador de Gifs</p>
            <AddNewCategory setCategories={setCategories} />
            <hr></hr>
            <ul className="list-category-grid">
                {/* El metodo .map() recorre el arreglo "categories" y simplemente retorna
                todos los gif asociados a cada categoria dentro del arreglo. Todos los gif son ordenados
                dentro de una lista no ordenada lo cual se puede observar analisando el funtional component
                "ShowGifGrid" */}
                
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
