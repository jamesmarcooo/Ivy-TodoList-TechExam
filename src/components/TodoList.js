import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    //init todos state where setTodos function update the todos value
    const [todos, setTodo] = useState([]) //empty array

    const addTodo = todo => {
        /* adds a task; neglects unnecessary space(s) in the input and empty string*/
        if(!todo.text || /^\s*$/.test(todo.text)) {//Regex 
            return
        }

        const newTodos = [todo, ...todos] //arrays of added tasks

        setTodo(newTodos) //updates the array
    }

    return (
        <div>
            <h1>What's the Plan for today?</h1>
             <TodoForm onSubmit={addTodo}/> {/*calls the function addTodo when submitted */}
        </div>
    )
}

export default TodoList
