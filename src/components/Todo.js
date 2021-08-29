import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'

function Todo({todos, completeTodo, removeTodo}) {
    const [edit, setEdit] = useState({
        /*set the edit state value*/
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
        /*mapping of the array*/
        <div 
            className={
                todo.isComplete ? 'todo-row complete' : 'todo-row' 
            } key={index}
        >                                                                       {/* changes the class (TOGGLE) depending on the complete status */}
            
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>           {/* passing of the todo text for the task */}
                {todo.text}
            </div>                                                              

            <div className = "icons">                                           {/* calls removeTodo function when closecircle icon was clicked */}
                <AiOutlineCloseCircle 
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <TiEdit 
                    onClick={() => setEdit({id: todo.id, value:todo.text})}     {/* calls setEdit function when edit icon was clicked */}
                    className="edit-icon"                
                />
            </div>

        </div>
    ))
}

export default Todo
