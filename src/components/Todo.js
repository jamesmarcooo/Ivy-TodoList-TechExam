import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        /*set the edit state value*/
        id: null,
        value: ''
    })


    const submitUpdate = value => {
        /* save the edited task */
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit = {submitUpdate} />
    }

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
                    onClick={() => setEdit({id: todo.id, value:todo.text})}     
                    className="edit-icon"                
                />                                                              {/* calls setEdit function when edit icon was clicked */}
            </div>

        </div>
    ))
}

export default Todo
