import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false)

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = []

    if (!searchValue.trim().length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    }


    const addTodo = (text) => {
        let validateDuplicates = todos.filter(todo => (todo.text.toLowerCase().trim() === text.toLowerCase().trim()));
        if (validateDuplicates.length === 0) {
            const newTodos = [...todos];
            newTodos.unshift({
                completed: false,
                text: text
            });
            saveTodos(newTodos);
            return 1;
        }else{
            return 0;
        }
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };