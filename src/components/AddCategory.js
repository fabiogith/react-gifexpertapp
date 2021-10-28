import React, { useState } from 'react'
import PropTypes  from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setinputValue('');
        inputValue.length > 2 ? setCategories((cat)=>[inputValue,...cat]) : alert('El campo esta vacio');
        
    }

    return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange}>
          </input>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
