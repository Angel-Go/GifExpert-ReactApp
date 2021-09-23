import React, { useState } from 'react';
import PropTypes from 'prop-types';

// setCategories es una Prop REQUERIDA
const AddNewCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    // handleInput captura el evento "onChange" del input, para despues
    // el valor ingresado en el input establecerlo como el nuevo valor del
    // "inputValue"
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.length > 2) {
            // Mediante setCategories() se cambia el estado de categories
            // Ejecutando una funcion de flecha que genera un nuevo arreglo con todos los elementos
            // anteriores y agregandole uno nuevo con el valor del input en ese momento
            setCategories(categories => [ inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInput}
            />
        </form>
    )
}

AddNewCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddNewCategory;