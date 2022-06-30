import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {

    const {addTodo,setOpenModal}=React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const [todoModalMessage, setTodoModalMessage] = React.useState('Escriba una tarea...')

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onAdd = (event) =>{
        event.preventDefault();
        if(newTodoValue.trim()===''){
            setTodoModalMessage('La nota no debe estar vacía')
        }else{
            addTodo(newTodoValue) ? setOpenModal(false):setTodoModalMessage('Esta nota ya existe...');
        }
    }
    
    return (
        <form action="" onSubmit={onAdd}>
            <label htmlFor="">{todoModalMessage}</label>
            <textarea 
            autoFocus
            name="" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder="Cortar la cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange}
            ></textarea>

            <div>
                <button
                type="button"
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>

                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }