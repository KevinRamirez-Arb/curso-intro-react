import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueValueChange = (event) =>{
        // console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <input
            className="TodoSearch"
            type="text"
            placeholder="Cebolla"
            value={searchValue}
            onChange={ onSearchValueValueChange }
        />
    )
};

export { TodoSearch };